import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Comment as CommentType } from '../../../store/comments/types'
import { voteComment, deleteComment } from '../../../store/comments/actions'
import { State } from '../../../store/types'

const mapStateToProps = (state: State, props: any) => {
    const comment: CommentType | undefined = state.comments?.find(comment => comment.id === props.id)
    return {
        ...(comment as CommentType)
    }
}

const mapDispatchToProps = {
    onUpvote(id: string) {
        return voteComment(id, 'upVote')
    },
    onDownvote(id: string) {
        return voteComment(id, 'downVote')
    },
    onDelete(id: string) {
        return deleteComment(id)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    parentId: string
}

const Comment = (props: Props) => {

    const { id, timestamp, body, author, parentDeleted, parentId, voteScore, deleted } = props
    return (
        <div>
            <h2>{parentId}</h2>
            <p>{id} {parentDeleted ? 'exists' : "doesn't exist"}</p>
            <div>
                <p>{author}</p>
                <p>{voteScore}</p>
                <p>{new Date(timestamp).toString()}</p>
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

export default connector(Comment)