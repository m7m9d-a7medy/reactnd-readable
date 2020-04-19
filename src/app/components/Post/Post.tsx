import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Post as PostType, PostsState } from '../../../store/posts/types'
import { requestGetPost } from '../../../store/posts/actions'

const mapStateToProps = (state: any, props: any) => {
    const post: PostType | undefined = (state.posts as PostsState).find(post => post.id === props.id)
    return {
        ...(post as PostType)
    }
}

const mapDispatchToProps = {
    getPosts(id: string) {
        return requestGetPost(id)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Post = (props: Props) => {
    const { id, timestamp, title, body, author, category, voteScore, deleted } = props
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <p>{author}</p>
                <p>{category}</p>
                <p>{voteScore}</p>
                <p>{new Date(timestamp).toDateString()}</p>
                <p>{deleted}</p>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default connector(Post)