import { gql } from "@apollo/client";

export const GetAllProducts = gql`
  query AllProducts($page: Int, $perPage: Int, $sortOrder:String, $filter: ProductFilter) {
  allProducts(page: $page, perPage: $perPage, sortOrder: $sortOrder,filter: $filter) {
    id
      name
      description
      image_url
      category
      price_in_cents
      sales
      created_at
    }
  }
`

export const Product = gql `
  query Product($id: ID!) {
    Product(id: $id) {
      name
      description
      image_url
      category
      price_in_cents
      sales
      created_at
    }
  }
`