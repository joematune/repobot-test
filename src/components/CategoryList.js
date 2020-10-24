import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../queries'
import { useDispatch, useTrackedState } from '../store'
import JokeButton from './JokeButton'

export default function CategoryList() {
    // Hook for resolving the GET_ALL_CATEGORIES query
    const {loading, error, data} = useQuery(GET_ALL_CATEGORIES)
    // Wait for data, then dispatch categories
    const [firstLoad, setFirstLoad] = useState(true)
    const dispatch = useDispatch()
    const state = useTrackedState()

    useEffect(() => {
        if (firstLoad && data) {
            dispatch({ type: 'ADD_CATEGORY', payload: data.categories })
            setFirstLoad(false)
        }
    }, [firstLoad, data, dispatch])

    if (loading) return <p>Loading Categories...</p>
    if (error) return <p>API's have errors - Chuck doesn't. <br />
                        Perhaps you meant <code>npm run dev</code></p>

    return (
        <div>
            {state.categories.map((category, index) => (
                <JokeButton key={index} variables={{category: category}} />
            ))}
        </div>
    )
}
