import React, { useEffect } from 'react'
import { State } from '../../../store/types'
import { votePost, deletePost, getPost } from '../../../store/posts/actions'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import CommentList from '../../components/CommentList/CommentList'
import { getComments } from '../../../store/comments/actions'
import Controls from '../../components/Controls/Controls'
import { Post as PostType } from '../../../store/posts/types'
import { emptyPost } from '../../common/helpers'
import NewComment from '../../components/NewComment/NewComment'
import { Link } from 'react-router-dom'

type BaseProps = {}

const mapStateToProps = (state: State, props: RouteComponentProps) => {
    const postId = (props.match.params as any).id
    const post = state.posts?.find(p => p.id === postId)
    return {
        post: post as PostType,
        exists: post ? true : false
    }
}

const mapDispatchToProps = (dispatch: Dispatch, props: RouteComponentProps) => {
    const postId = (props.match.params as any).id
    return {
        onUpvote() {
            dispatch(votePost(postId, 'upVote'))
        },
        onDownvote() {
            dispatch(votePost(postId, 'downVote'))
        },
        onLoad() {
            dispatch(getPost(postId))
            dispatch(getComments(postId))
        },
        onDelete() {
            dispatch(deletePost(postId))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux & RouteComponentProps

const PostView = (props: Props) => {
    const { onLoad, post, onDownvote, onUpvote, onDelete, history, exists } = props

    useEffect(() => {
        onLoad()
    }, [onLoad])

    if (!exists) {
        return (
            <div>
                <h2>Not found</h2>
                <Link to='/posts#all' className='btn btn-large indigo white-text'>
                    Go to feed
                </Link>
            </div>
        )
    }

    const { id, body, author, timestamp, voteScore, title } = post ? post : emptyPost

    const editHandler = () => {
        history.push(`/posts/edit/${id}`)
    }

    const deleteHandler = () => {
        history.push(`/posts/#${post.category}`)
        onDelete()
    }

    return (
        <div>
            <div className='card z-depth-2'>
                <div className='card-content'>
                    <p className='card-title'>{title}</p>
                    <p>
                        <span>By {author}</span>
                        <span> at {new Date(timestamp).toLocaleString()}</span>
                    </p>
                    <p>Votes: {voteScore}</p>
                </div>
                <div className='card-content'>
                    <p className='flow-text'>{body}</p>
                </div>
                <div className='card-action'>
                    <Controls
                        upvoteHandler={onUpvote}
                        downvoteHandler={onDownvote}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                </div>
                <div className='card-content'>
                    <p>Comments</p>
                    <NewComment parentId={id} />
                    <CommentList parentId={id} />
                </div>
            </div>
        </div>
    )
}

export default connector(PostView)