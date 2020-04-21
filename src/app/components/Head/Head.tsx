import React from 'react'
import { Helmet } from 'react-helmet'


const Head = () => {
    return (
        <Helmet>
            <meta
                name="description"
                content="Readable: Anonymous reading website"
            />
            <meta name='author' content='Mahmoud Ahmedy' />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <title>Readable</title>
        </Helmet>
    )
}

export default Head