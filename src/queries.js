import { gql } from '@apollo/client'

// Query to get all joke categories - returns array of strings
export const GET_ALL_CATEGORIES = gql`
    query {
      categories
    }
`

// Query which takes a variable/argument called 'category'
// and returns the joke via value field
export const GET_A_JOKE = gql`
    query GetAJoke($category: String!) {
        joke(category: $category) {
            value
        }
    }
`
