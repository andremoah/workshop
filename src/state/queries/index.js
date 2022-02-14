import { gql } from '@apollo/client'

export const GET_PATIENTS = gql`
    query getAll($pagination: PaginationInput) {
        getAll(pagination: $pagination) {
            age
            gender
            id
            name
        }
    }
`
