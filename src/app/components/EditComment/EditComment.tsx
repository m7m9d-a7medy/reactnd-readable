import React, { useState, SyntheticEvent } from 'react'
import { Comment as CommentType } from '../../../store/comments/types'

type BaseProps = {
    comment: CommentType
    onSubmit: (body: string) => void
}

const EditComment = (props: BaseProps) => {
    const { comment, onSubmit } = props
    const [editedBody, setEditedBody] = useState(comment.body)

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        onSubmit(editedBody)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row'>
            <div className='input-field col s10'>
                    <textarea
                        value={editedBody}
                        onChange={e => setEditedBody(e.target.value)}
                        required
                    />
                </div>
                <div className='col s2'>
                    <button
                        className='btn material-icons indigo white-text medium'
                        type='submit'
                    >
                        <i>done</i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditComment