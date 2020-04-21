import React from 'react'
import { centeralized } from '../Common/styles'

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
            <div className='col s2' style={centeralized}>
                <span className='btn-floating indigo white-text' onClick={upvoteHandler} style={centeralized}>
                    <i className='large material-icons'>arrow_upward</i>
                </span>
            </div>
            <div className='col s2' style={centeralized}>
                <span className='btn-floating indigo white-text' onClick={downvoteHandler} style={centeralized}>
                    <i className='large material-icons'>arrow_downward</i>
                </span>
            </div>
            <div className='col s2' style={centeralized}>
                <span className='btn-floating indigo white-text' onClick={editHandler} style={centeralized}>
                    <i className='large material-icons'>edit</i>
                </span>
            </div>
            <div className='col s2 offset-s4' style={centeralized}>
                <span className='btn-floating red darken-1 white-text' onClick={deleteHandler} style={centeralized}>
                    <i className='large material-icons'>delete</i>
                </span>
            </div>
        </div>
    )
}

export default Controls