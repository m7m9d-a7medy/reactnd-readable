import React from 'react'
import { State } from '../../../store/types'
import { votePost } from '../../../store/posts/actions'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'

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
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux & RouteComponentProps

const PostView = (props: Props) => {
    return (
        <div>
            Hello {(props.match.params as any).id}
        </div>
    )
}

export default connector(PostView)