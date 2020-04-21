import React from 'react'
import { State } from '../../../store/types'
import { Comment as CommentType } from '../../../store/comments/types'
import { connect, ConnectedProps } from 'react-redux'
import Comment from '../Comment/Comment'

type BaseProps = {
    parentId: string
}

const mapStateToProps = (state: State, props: BaseProps) => ({
    comments: state.comments?.filter(c => c.parentId === props.parentId)
        .sort((a: CommentType, b: CommentType) => b.timestamp - a.timestamp)
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = BaseProps & PropsFromRedux

const CommentList = (props: Props) => {
    return (
        <ul className='collection'>
            {
                props.comments?.map(({ id }) => (
                    <li className='collection-item' key={id}>
                        <Comment id={id} />
                    </li>
                ))
            }
        </ul>
    )
}

export default connector(CommentList)