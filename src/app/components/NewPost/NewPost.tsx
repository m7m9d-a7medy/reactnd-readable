import React, { useState, SyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { processNewPost } from '../../../store/posts/actions'
import { CategoriesState } from '../../../store/categories/types'

const mapStateToProps = (state: any, props: any) => {
    return {
        categories: state.categories as CategoriesState
    }
}

const mapDispatchToProps = {
    onNewPost(author: string, category: string, body: string, title: string) {
        return processNewPost(author, body, category, title)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Post = (props: Props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')

    function handleChange(field: string, value: string): void {
        switch (field) {
            case 'title':
                return setTitle(value)
            case 'category':
                return setCategory(value)
            case 'body':
                return setBody(value)
            case 'author':
                return setAuthor(value)
            default:
                return
        }
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        props.onNewPost(author, category, body, title)
    }

    return (
        <div>
            <h1>New</h1>
            <form onSubmit={handleSubmit}>
                <input name='postTitle' placeholder='Title' onChange={e => handleChange('title', e.target.value)} value={title} />
                <input name='body' placeholder='body' onChange={e => handleChange('body', e.target.value)} value={body} />
                <input name='author' placeholder='author' onChange={e => handleChange('author', e.target.value)} value={author} />
                <select>
                    {
                        props.categories.map(c => (
                            <option key={c.name} value={c.path}>{c.name}</option>
                        ))
                    }
                </select>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default connector(Post)