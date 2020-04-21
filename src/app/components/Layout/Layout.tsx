import React, { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { getCategories } from '../../../store/categories/actions'
import { State } from '../../../store/types'
import { connect, ConnectedProps } from 'react-redux'
import Navigation from './Navigation/Navigation'
import Dropdown from './Navigation/Dropdown'

type BaseProps = React.PropsWithChildren<{}>

const mapStateToProps = (state: State, props: BaseProps) => {
    return {
        categories: state.categories || []
    }
}

const mapDispatchToProps = {
    getCategories() {
        return getCategories()
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type LayoutProps = BaseProps & PropsFromRedux

const Layout = (props: LayoutProps) => {
    const { categories, getCategories, } = props
    const sidenavRef = useRef<null | HTMLUListElement>(null)
    const categoryDDRef = useRef<null | HTMLAnchorElement>(null)

    useEffect(() => {
        getCategories()

        if (categoryDDRef.current !== null) {
            M.Dropdown.init(categoryDDRef.current)
        }
        if (sidenavRef.current !== null) {
            M.Sidenav.init(sidenavRef.current)
        }
    }, [getCategories])

    return (
        <Fragment>
            <header className='navbar-fixed'>
                <nav className='indigo'>
                    <div className='nav-wrapper container'>
                        <Link to='/' className='brand-logo'>Readable</Link>
                        <Navigation
                            dataTarget='categories-dropdown'
                            dropdownRef={categoryDDRef}
                        />
                        <Dropdown
                            dataTargetId='categories-dropdown'
                            categories={categories}
                        />
                    </div>
                </nav>
            </header>
            <div className='container'>
                {props.children}
            </div>
        </Fragment>
    )
}

export default connector(Layout)