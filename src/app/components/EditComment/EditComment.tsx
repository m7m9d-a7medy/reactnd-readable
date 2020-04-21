import React, { useState, SyntheticEvent } from 'react'
import { Comment as CommentType } from '../../../store/comments/types'
import { centeralized } from '../../common/styles'

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
                        className="materialize-textarea"
                        required
                    />
                </div>
                <div className='col s2' style={centeralized}>
                    <button
                        className='btn indigo white-text'
                        type='submit'
                        style={{
                            display: 'flex'
                        }}
                    >
                        <i className='material-icons medium'>done</i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditComment