import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PostList from '../../components/PostList/PostList'
import { OrderOptions } from '../../components/PostList/types'

type BaseProps = {}

type Props = RouteComponentProps & BaseProps

const Posts = (props: Props) => {
    const hash = props.location.hash.slice(1)
    console.log('Posts params', hash)

    const [orderParams, setOrderParams] = useState<OrderOptions>('votes-asc')

    useEffect(() => {
        const elements = document.querySelectorAll('select')
        M.FormSelect.init(elements)
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='input-field col s8 offset-s2'>
                    <select defaultValue={orderParams} onChange={e => setOrderParams(e.target.value as OrderOptions)}>
                        <option value='votes-asc'>Votes - Ascending</option>
                        <option value='votes-desc'>Votes - Descending</option>
                        <option value='date-asc'>Date - Ascending</option>
                        <option value='date-desc'>Date - Descending</option>
                    </select>
                </div>
            </div>
            {
                <PostList category={hash} orderBy={orderParams} />
            }
        </div>
    )
}

export default Posts