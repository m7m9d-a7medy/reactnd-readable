import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PostList from '../../components/PostList/PostList'

type BaseProps = {}

type Props = RouteComponentProps & BaseProps

const Posts = (props: Props) => {
    const hash = props.location.hash.slice(1)
    console.log('Posts params', hash)

    return (
        <div>
            {
                <PostList category={hash} orderBy='votes-asc'/>
            }
        </div>
    )
}

export default Posts