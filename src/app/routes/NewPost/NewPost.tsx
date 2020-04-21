import React, { useState, SyntheticEvent, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { processNewPost } from '../../../store/posts/actions'
import { CategoriesState } from '../../../store/categories/types'
import { State } from '../../../store/types'
import { RouteComponentProps } from 'react-router'

type BaseProps = {}

const mapStateToProps = (state: State, props: BaseProps) => {
    return {
        categories: state.categories?.filter(c => c.name !== 'all') as CategoriesState
    }
}

const mapDispatchToProps = {
    onNewPost(author: string, category: string, body: string, title: string) {
        return processNewPost(author, body, category, title)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps & {}

const Post = (props: Props) => {
    const { categories, onNewPost, history } = props
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    useEffect(() => {
        const elements = document.querySelectorAll('select')
        const instances = M.FormSelect.init(elements)

        return () => {
            for (let instance of instances) {
                instance.destroy()
            }
        }
    }, [])

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        onNewPost(author, category, body, title)
        history.push(`/posts#${category}`)
    }

    return (
        <div >
            <h2>New Post</h2>
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
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
                    <div className="input-field col s6">
                        <select
                            id='category'
                            onChange={e => setCategory(e.target.value)}
                            required
                        >
                            {categories.map(({ name }) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="category">Category</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="title"
                            type="text"
                            className="validate"
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="body"
                            className="materialize-textarea"
                            style={{
                                height: '15rem'
                            }}
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            required
                        ></textarea>
                        <label htmlFor="body">Post</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field col s12">
                        <button
                            className='btn btn-large indigo white-text'
                            style={{
                                width: '100%',
                            }}
                        >
                            Post
                            </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connector(Post)