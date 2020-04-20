import React from 'react'

type LayoutProps = {
    children: any
}

const Layout = (props: LayoutProps) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Layout