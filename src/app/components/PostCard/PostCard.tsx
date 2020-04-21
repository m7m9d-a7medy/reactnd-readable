import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Post as PostType } from '../../../store/posts/types'
import { Link } from 'react-router-dom'
import { State } from '../../../store/types'

type BaseProps = {
    id: string
}

const mapStateToProps = (state: State, props: BaseProps) => {
    const post: PostType | undefined = state.posts?.find(post => post.id === props.id)
    return {
        title: post?.title,
        author: post?.author,
        id: post?.id
    }
}
/* 
const mapDispatchToProps = {
    onUpvote(id: string) {
        return votePost(id, 'upVote')
    },
    onDownvote(id: string) {
        return votePost(id, 'downVote')
    },
    onDelete(id: string) {
        return deletePost(id)
    }
} */

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const PostCard = (props: Props) => {
    const { title, author, id } = props
    return (
        <div className='row'>
            <div className='col m8 offset-m2 s12'>
                <Link to={`/posts/${id}`}>
                    <div className='card white z-depth-1'>
                        <div className='card-content'>
                            <span className='card-title'>{title}</span>
                            <p>By {author}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default connector(PostCard)