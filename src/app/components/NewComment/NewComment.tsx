import React, { useState, SyntheticEvent } from 'react'
import { centeralized } from '../../common/styles'
import { Dispatch } from 'redux'
import { processNewComment } from '../../../store/comments/actions'
import { connect, ConnectedProps } from 'react-redux'

type BaseProps = {
    parentId: string
}

const mapDispatchToProps = (dispatch: Dispatch, props: BaseProps) => ({
    onSubmit(author: string, body: string) {
        dispatch(processNewComment(body, author, props.parentId))
    }
})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux

const NewComment = (props: Props) => {
    const { onSubmit } = props
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        onSubmit(author, body)
        setAuthor('')
        setBody('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row'>
                <div className="input-field col s10">
                    <input
                        id="author"
                        type="text"
                        className="validate"
                        required
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <label htmlFor="author">Author</label>
                </div>
            </div>
            <div className='row'>
                <div className='input-field col s10'>
                    <input
                        id="body"
                        type="text"
                        className="validate"
                        required
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                    <label htmlFor="author">Comment</label>
                </div>
                <div className='col s2' style={centeralized}>
                    <button
                        className='btn-floating indigo white-text'
                        type='submit'
                        style={{
                            ...centeralized,
                            height: '4rem',
                            width: '4rem',
                            transform: 'translateY(-75%)',
                        }}
                    >
                        <i className='large material-icons' style={{ fontSize: '2.5rem' }}>done</i>
                    </button>
                </div>
            </div>

        </form >
    )
}

export default connector(NewComment)