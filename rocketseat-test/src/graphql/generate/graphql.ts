/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date type */
  Date: any;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  category: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  price_in_cents: Scalars['Int'];
  sales: Scalars['Int'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price_in_cents?: InputMaybe<Scalars['Int']>;
  sales?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  price_in_cents: Scalars['Int'];
  sales: Scalars['Int'];
};

export type ProductFilter = {
  category?: InputMaybe<Scalars['String']>;
  category_neq?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_gt?: InputMaybe<Scalars['Date']>;
  created_at_gte?: InputMaybe<Scalars['Date']>;
  created_at_lt?: InputMaybe<Scalars['Date']>;
  created_at_lte?: InputMaybe<Scalars['Date']>;
  created_at_neq?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image_url?: InputMaybe<Scalars['String']>;
  image_url_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  price_in_cents?: InputMaybe<Scalars['Int']>;
  price_in_cents_gt?: InputMaybe<Scalars['Int']>;
  price_in_cents_gte?: InputMaybe<Scalars['Int']>;
  price_in_cents_lt?: InputMaybe<Scalars['Int']>;
  price_in_cents_lte?: InputMaybe<Scalars['Int']>;
  price_in_cents_neq?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_neq?: InputMaybe<Scalars['Int']>;
};

export type ProductInput = {
  category: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  price_in_cents: Scalars['Int'];
  sales: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};
