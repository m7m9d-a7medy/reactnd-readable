import React, { useState, SyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updatePost } from '../../../store/posts/actions'
import { State } from '../../../store/types'
import { Post as PostType } from '../../../store/posts/types'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

type BaseProps = {}

const mapStateToProps = (state: State, props: RouteComponentProps) => {
    const post = state.posts?.find(p => p.id === (props.match.params as any).id)
    return {
        post,
        exists: post ? true : false
    }
}

const mapDispatchToProps = {
    onUpdatePost(id: string, title: string, body: string) {
        return updatePost(id, title, body)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps & BaseProps

const Post = (props: Props) => {
    const { post, onUpdatePost, history, exists } = props
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedBody, setUpdatedBody] = useState('')
    const [updated, setUpdated] = useState(false)

    if (!exists) {
        return (
            <div>
                <h2>Not found</h2>
                <Link to='/posts#all' className='btn btn-large indigo white-text'>
                    Go to feed
                </Link>
            </div>
        )
    } else if (!updated) {
        setUpdated(true)
        setUpdatedBody((post as PostType).body)
        setUpdatedTitle((post as PostType).title)
    }

    const { title, body, id } = post as PostType

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        onUpdatePost(id, updatedTitle, updatedBody)
        history.push(`/posts/${id}`)
    }

    return (
        <div>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder='Title'
                            id="title"
                            type="text"
                            className="validate"
                            required
                            value={updatedTitle}
                            defaultValue={title}
                            onChange={e => setUpdatedTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            placeholder='Post'
                            id="body"
                            className="materialize-textarea"
                            style={{
                                height: '15rem'
                            }}
                            value={updatedBody}
                            defaultValue={body}
                            onChange={e => setUpdatedBody(e.target.value)}
                            required
                        ></textarea>
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