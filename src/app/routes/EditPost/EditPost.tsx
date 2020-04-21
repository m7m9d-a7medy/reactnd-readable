import React, { useState, SyntheticEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updatePost } from '../../../store/posts/actions'
import { State } from '../../../store/types'
import { Post as PostType } from '../../../store/posts/types'
import { RouteComponentProps } from 'react-router'

type BaseProps = {}

const mapStateToProps = (state: State, props: RouteComponentProps) => {
    return {
        post: state.posts?.find(p => p.id === (props.match.params as any).id)
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
    const { post, onUpdatePost, history } = props
    const { title, body, id } = post as PostType

    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedBody, setUpdatedBody] = useState(body)

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