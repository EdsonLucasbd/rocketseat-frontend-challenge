import { gql } from "graphql-request";

export const GetAllProducts = gql`
  query Products($orderBy: ProductOrderByInput = publishedAt_DESC, $skip: Int, $slug: String = "") {
  productsConnection(
    first: 12
    orderBy: $orderBy
    skip: $skip
    where: {categories_some: {slug: $slug}}
  ) {
    edges {
      node {
        categories {
          name
        }
        id
        name
        description
        images {
          url
        }
        price
        slug
        createdAt
        sales
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
      endCursor
    }
    aggregate {
      count
    }
  }
}
`

export const GetProduct = gql `
  query Product($id: ID = "") {
  product(where: {id: $id}) {
    id
    name
    description
    images {
      url
      createdAt
    }
    price
    slug
    categories {
      name
    }
  }
}
`

export const SearchProducts = gql`
  query SearchProducts($skip: Int, $orderBy: ProductOrderByInput = publishedAt_DESC, $_search: String = "") {
  productsConnection(
    first: 12
    orderBy: $orderBy
    skip: $skip
    where: {_search: $_search, name_contains: $_search}
  ) {
    edges {
      node {
        categories {
          name
        }
        id
        name
        description
        images {
          url
        }
        price
        slug
        createdAt
        sales
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      pageSize
      startCursor
      endCursor
    }
    aggregate {
      count
    }
  }
}
`