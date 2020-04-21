import React, { Fragment } from 'react'
import { State } from '../../../store/types'
import { Post as PostType } from '../../../store/posts/types'
import { connect, ConnectedProps } from 'react-redux'
import PostCard from '../PostCard/PostCard'
import { OrderOptions } from './types'

type BaseProps = {
    category: string
    orderBy: OrderOptions
}

const mapStateToProps = (state: State, props: BaseProps) => {
    const posts = props.category !== 'all'
        ? state.posts?.filter(p => p.category === props.category)
        : state.posts

    const sortedPosts = posts?.sort((a: PostType, b: PostType) => {
        switch (props.orderBy) {
            case 'date-asc':
                return b.timestamp - a.timestamp
            case 'date-desc':
                return a.timestamp - b.timestamp
            case 'votes-asc':
                return b.voteScore - a.voteScore
            case 'votes-desc':
                return a.voteScore - b.voteScore
            default:
                return 0
        }
    })

    return { sortedPosts, }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux

const PostList = (props: Props) => {
    return (
        <Fragment>
            {
                props.sortedPosts?.map(({ id }) => (
                    <PostCard
                        key={id}
                        id={id}
                    />
                ))
            }
        </Fragment>
    )
}

export default connector(PostList)