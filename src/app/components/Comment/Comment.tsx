import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Comment as CommentType } from '../../../store/comments/types'
import { voteComment, deleteComment, updateComment } from '../../../store/comments/actions'
import { State } from '../../../store/types'
import { Dispatch } from 'redux'
import Controls from '../Controls/Controls'
import EditComment from '../EditComment/EditComment'

type BaseProps = {
    id: string
}

const mapStateToProps = (state: State, props: BaseProps) => {
    const comment: CommentType | undefined = state.comments?.find(comment => comment.id === props.id)
    return {
        comment: comment as CommentType
    }
}

const mapDispatchToProps = (dispatch: Dispatch, props: BaseProps) => ({
    onUpvote() {
        dispatch(voteComment(props.id, 'upVote'))
    },
    onDownvote() {
        dispatch(voteComment(props.id, 'downVote'))
    },
    onDelete() {
        dispatch(deleteComment(props.id))
    },
    onUpdate(body: string, ts: number) {
        dispatch(updateComment(props.id, ts, body))
    }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & BaseProps

const Comment = (props: Props) => {
    const { comment, onDelete, onDownvote, onUpvote, onUpdate } = props
    const { body, author, timestamp, voteScore } = comment
    const [editing, setEditing] = useState(false)

    const editHandler = (editedBody: string) => {
        setEditing(false)
        onUpdate(editedBody, new Date().getTime())
    }

    const editElement = editing && (
        <div className='card-action'>
            <EditComment
                onSubmit={editHandler}
                comment={comment}
            />
        </div>
    )

    return (
        <div className='card z-depth-1'>
            <div className='card-content'>
                <p className='card-title'>{body}</p>
                <p>
                    <span>By {author}</span>
                    <span>, at {new Date(timestamp).toString()}</span>
                </p>
                <p>Votes: {voteScore}</p>
            </div>
            <div className='card-action'>
                <Controls
                    upvoteHandler={onUpvote}
                    downvoteHandler={onDownvote}
                    editHandler={() => setEditing(true)}
                    deleteHandler={onDelete}
                />
            </div>
            {editElement}
        </div>
    )
}

export default connector(Comment)