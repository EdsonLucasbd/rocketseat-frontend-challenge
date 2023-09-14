/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Products($orderBy: ProductOrderByInput = publishedAt_DESC, $skip: Int, $slug: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {categories_some: {slug: $slug}}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n": types.ProductsDocument,
    "\n  query Product($id: ID = \"\") {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    images {\n      url\n      createdAt\n    }\n    price\n    slug\n    categories {\n      name\n    }\n  }\n}\n": types.ProductDocument,
    "\n  query SearchProducts($skip: Int, $orderBy: ProductOrderByInput = publishedAt_DESC, $_search: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {_search: $_search}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n": types.SearchProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products($orderBy: ProductOrderByInput = publishedAt_DESC, $skip: Int, $slug: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {categories_some: {slug: $slug}}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"): (typeof documents)["\n  query Products($orderBy: ProductOrderByInput = publishedAt_DESC, $skip: Int, $slug: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {categories_some: {slug: $slug}}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Product($id: ID = \"\") {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    images {\n      url\n      createdAt\n    }\n    price\n    slug\n    categories {\n      name\n    }\n  }\n}\n"): (typeof documents)["\n  query Product($id: ID = \"\") {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    images {\n      url\n      createdAt\n    }\n    price\n    slug\n    categories {\n      name\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchProducts($skip: Int, $orderBy: ProductOrderByInput = publishedAt_DESC, $_search: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {_search: $_search}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"): (typeof documents)["\n  query SearchProducts($skip: Int, $orderBy: ProductOrderByInput = publishedAt_DESC, $_search: String = \"\") {\n  productsConnection(\n    first: 12\n    orderBy: $orderBy\n    skip: $skip\n    where: {_search: $_search}\n  ) {\n    edges {\n      node {\n        categories {\n          name\n        }\n        id\n        name\n        description\n        images {\n          url\n        }\n        price\n        slug\n        createdAt\n        sales\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      pageSize\n      startCursor\n      endCursor\n    }\n    aggregate {\n      count\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;