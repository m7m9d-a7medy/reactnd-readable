import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from '../../store/posts/actions'
import { getCategories } from '../../store/categories/actions'
import Post from '../components/Post/Post'
import NewPost from '../components/NewPost/NewPost'
import EditPost from '../components/EditPost/EditPost'
import Comment from '../components/Comment/Comment'
import { State } from '../../store/types'
import { getComments } from '../../store/comments/actions'
import { RouteComponentProps } from 'react-router-dom'

const mapStateToProps = (state: State, props: any) => {
    return {
        postIds: state.posts?.map(p => p.id),
        commentIds: state.comments?.map(p => p.id)
    }
}

const mapDispatchToProps = {
    getPosts() {
        return getPosts(null)
    },
    getCategories() {
        return getCategories()
    },
    getComments(id: string) {
        return getComments(id)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type HomeProps = PropsFromRedux & RouteComponentProps & {}

const Home = (props: HomeProps) => {
    const { getCategories, getPosts } = props

    useEffect(() => {
        getPosts()
        getCategories()
    }, [getCategories, getPosts])

    const [postId, setPostId] = useState('')


    return (
        <div>
            {
                props.postIds?.map(id => (
                    <div key={id} onClick={() => {
                        props.getComments(id)
                        setPostId(id)
                    }}>
                        <Post
                            id={id}
                        />
                    </div>
                ))
            }
            <NewPost />
            <EditPost id='' />
            {
                props.commentIds?.map(id => (
                    <Comment
                        key={id}
                        id={id}
                        parentId={postId}
                    />
                ))
            }
        </div>
    )
}

export default connector(Home)