import { gql } from "graphql-tag"

export type PRODUCT = {
    id: string,
    imgurl: string,
    price: number,
    title: string,
    description: string,
    createdAt: string
}

const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
        id
        imgeUrl
        price
        title
        description
        createdAt
    }
`

export default GET_PRODUCTS