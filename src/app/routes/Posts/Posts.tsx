import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PostList from '../../components/PostList/PostList'
import { OrderOptions } from '../../components/PostList/types'

type BaseProps = {}

type Props = RouteComponentProps & BaseProps

const Posts = (props: Props) => {
    const category = props.location.hash ? props.location.hash.slice(1) : 'all'
    const [orderParams, setOrderParams] = useState<OrderOptions>('votes-asc')

    useEffect(() => {
        const elements = document.querySelectorAll('select')
        const instances = M.FormSelect.init(elements)

        return () => {
            for (let instance of instances) {
                instance.destroy()
            }
        }
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
            <div>
                <h4>Showing {category}</h4>
                {
                    <PostList category={category} orderBy={orderParams} />
                }
            </div>
        </div>
    )
}

export default Posts