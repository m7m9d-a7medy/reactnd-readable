import React from 'react'
import { NavLink } from 'react-router-dom'

type NavProps = {
    dropdownRef: React.MutableRefObject<null | HTMLAnchorElement>
    dataTarget: string
}

const Navigation = (props: NavProps) => {
    const { dropdownRef, dataTarget } = props
    return (
        <ul className='right hide-on-med-and-down'>
            <li>
                <NavLink to='/posts/new'>
                    New Post
                </NavLink>
            </li>
            <li>
                <NavLink ref={dropdownRef} className="dropdown-trigger" data-target={dataTarget} to='#' >
                    Categories
                    <i className="material-icons right">arrow_drop_down</i>
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation