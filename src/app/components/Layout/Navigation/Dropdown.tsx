import { CategoriesState } from "../../../../store/categories/types"
import React from "react"
import { NavLink } from "react-router-dom"

type DropdownProps = {
    categories: CategoriesState
    dataTargetId: string
}

const Dropdown = (props: DropdownProps) => {
    const { categories, dataTargetId } = props
    return (
        <ul className='dropdown-content' id={dataTargetId}>
            {
                categories.map(({ name, path }) => (
                    <li key={name}>
                        <NavLink to={{
                            pathname: '/posts',
                            hash: `#${path}`
                        }}>
                            {name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default Dropdown