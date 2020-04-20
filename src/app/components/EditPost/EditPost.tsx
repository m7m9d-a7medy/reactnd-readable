import React, { useState, SyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updatePost } from '../../../store/posts/actions'
import { State } from '../../../store/types'

const mapStateToProps = (state: State, props: any) => {
    return {
        ids: state.posts?.map(p => p.id)
    }
}

const mapDispatchToProps = {
    onUpdatePost(id: string, title: string, body: string) {
        return updatePost(id, title, body)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    id: string
}

const Post = (props: Props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [id, setId] = useState('')

    function handleChange(field: string, value: string): void {
        switch (field) {
            case 'title':
                return setTitle(value)
            case 'body':
                return setBody(value)
            case 'id':
                return setId(value)
            default:
                return
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        props.onUpdatePost(id, title, body)
    }

    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <input name='postTitle' placeholder='Title' onChange={e => handleChange('title', e.target.value)} value={title} />
                <input name='body' placeholder='body' onChange={e => handleChange('body', e.target.value)} value={body} />
                <select onChange={e => handleChange('id', e.target.value)}>
                    {
                        props.ids?.map(id => (
                            <option key={id} value={id}>{id}</option>
                        ))
                    }
                </select>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default connector(Post)