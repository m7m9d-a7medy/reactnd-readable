import React, { Fragment } from 'react'
import { State } from '../../../store/types'
import { Post as PostType } from '../../../store/posts/types'
import { connect, ConnectedProps } from 'react-redux'
import PostCard from '../PostCard/PostCard'

type BaseProps = {
    category: string
    orderBy: 'date-asc' | 'date-desc' | 'votes-asc' | 'votes-desc'
}

const mapStateToProps = (state: State, props: BaseProps) => {
    const posts = state.posts?.filter(p => p.category === props.category)
        .sort((a: PostType, b: PostType) => {
            switch (props.orderBy) {
                case 'date-asc':
                    return a.timestamp - b.timestamp
                case 'date-desc':
                    return b.timestamp - a.timestamp
                case 'votes-asc':
                    return a.voteScore - b.voteScore
                case 'votes-desc':
                    return b.voteScore - a.voteScore
                default:
                    return 0
            }
        })

    return { posts, }
}

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux

const PostList = (props: Props) => {
    return (
        <Fragment>
            {
                props.posts?.map(({ id }) => (
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