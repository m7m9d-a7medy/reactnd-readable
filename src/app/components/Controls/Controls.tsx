import React from 'react'

type BaseProps = {
    deleteHandler: () => void
    upvoteHandler: () => void
    downvoteHandler: () => void
    editHandler: () => void
}

const Controls = (props: BaseProps) => {
    const { deleteHandler, upvoteHandler, downvoteHandler, editHandler } = props

    return (
        <div className='row'>
            <div className='col s3 center-align'>
                <span className='large material-icons indigo white-text' onClick={upvoteHandler}>
                    <i>arrow_upward</i>
                </span>
            </div>
            <div className='col s3 center-align'>
                <span className='large material-icons indigo white-text' onClick={downvoteHandler}>
                    <i>arrow_downward</i>
                </span>
            </div>
            <div className='col s3 center-align'>
                <span className='large material-icons indigo white-text' onClick={editHandler}>
                    <i>edit</i>
                </span>
            </div>
            <div className='col s3 center-align'>
                <span className='large material-icons red darken-1 white-text' onClick={deleteHandler}>
                    <i>delete</i>
                </span>
            </div>
        </div>
    )
}

export default Controls