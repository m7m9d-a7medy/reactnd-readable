import React, { useEffect } from 'react'
import { State } from '../../../store/types'
import { votePost } from '../../../store/posts/actions'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import CommentList from '../../components/CommentList/CommentList'
import { getComments } from '../../../store/comments/actions'

type BaseProps = {}

const mapStateToProps = (state: State, props: RouteComponentProps) => {
    const postId = (props.match.params as any).id
    return {
        post: state.posts?.find(p => p.id === postId)
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
            dispatch(getComments(postId))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux & RouteComponentProps

const PostView = (props: Props) => {
    const { onLoad } = props
    const id = (props.match.params as any).id
    
    useEffect(() => {
        onLoad()
    }, [onLoad])

    return (
        <div>
            Hello {}
            <CommentList parentId={id} />
        </div>
    )
}

export default connector(PostView)