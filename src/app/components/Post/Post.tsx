import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Post as PostType, PostsState } from '../../../store/posts/types'
import { votePost, deletePost } from '../../../store/posts/actions'

const mapStateToProps = (state: any, props: any) => {
    const post: PostType | undefined = (state.posts as PostsState).find(post => post.id === props.id)
    return {
        ...(post as PostType)
    }
}

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
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Post = (props: Props) => {
    const { id, timestamp, title, body, author, category, voteScore, deleted } = props
    return (
        <div>
            <h2>{title}</h2>
            <p>{id}</p>
            <div>
                <p>{author}</p>
                <p>{category}</p>
                <p>{voteScore}</p>
                <p>{new Date(timestamp).toDateString()}</p>
                <p>{deleted}</p>
            </div>
            <p>{body}</p>
            <div>
                <button onClick={() => props.onUpvote(id)}>Upvote</button>
                <button onClick={() => props.onDownvote(id)}>Downvote</button>
                <button onClick={() => props.onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default connector(Post)