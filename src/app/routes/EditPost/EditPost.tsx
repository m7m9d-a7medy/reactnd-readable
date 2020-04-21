import React, { useState, SyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updatePost } from '../../../store/posts/actions'
import { State } from '../../../store/types'
import { Post as PostType } from '../../../store/posts/types'
import { RouteComponentProps } from 'react-router'

type BaseProps = {
    id: string
}

const mapStateToProps = (state: State, props: BaseProps) => {
    return {
        post: state.posts?.find(p => p.id === props.id)
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
    const { post, onUpdatePost } = props
    const { title, body, id } = post as PostType

    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedBody, setUpdatedBody] = useState(body)

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        onUpdatePost(id, updatedTitle, updatedBody)
    }

    return (
        <div>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="title"
                            type="text"
                            className="validate"
                            required
                            value={title}
                            onChange={e => setUpdatedTitle(e.target.value)}
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
                            onChange={e => setUpdatedBody(e.target.value)}
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