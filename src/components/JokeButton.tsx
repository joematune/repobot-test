import * as React from 'react'
import { useQuery } from '@apollo/client'
import { GET_A_JOKE } from '../queries'
import { useDispatch } from '../store'
import styled from 'styled-components'

// Disabled when 'loading'. Focus style for mouse/keyboard/touch
const StyledButton = styled.button`
    background-color: rgba(255, 99, 71, 0.8);
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    font-size: 16px;
    font-size: clamp(1rem, 2.5vw, 2rem);
    text-transform: capitalize;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease 0s;
    &:hover,&:focus {
        background-color: rgba(255, 99, 71, 1);
        transform: translateY(-3px);
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        background-color: rgba(255, 99, 71, 0.3);
    }
`

type Props = {
    variables: {
        category: string
    }
}

type QueryResponse = {
    data: {
        joke: {
            value: string
        }
    }
}

// Creates a button which can query GET_A_JOKE
const JokeButton = ({ variables }: Props): JSX.Element => {
    //  Hook for resolving the GET_A_JOKE query
    const {loading, refetch} = useQuery(GET_A_JOKE, { variables: variables });
    const dispatch = useDispatch()

    // Return button that refetches onClick to load new data
    return (
        <StyledButton disabled={loading} onClick={() => {
            refetch()
            .then(({data}: QueryResponse) => dispatch({ type: 'ADD_JOKE', payload: data.joke.value }))
            .catch(error => console.error(error))
        }}>
            {variables.category}
        </StyledButton>
    )
}

export default JokeButton
