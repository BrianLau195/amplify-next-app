/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      address
      createdAt
      id
      nickname
      owner
      updatedAt
      __typename
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      Admin
      addressId
      amount
      createdAt
      id
      invoiceDate
      invoiceStatus
      invoiceType
      updatedAt
      __typename
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      addressId
      createdAt
      email
      id
      name
      updatedAt
      userId
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        createdAt
        id
        nickname
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Admin
        addressId
        amount
        createdAt
        id
        invoiceDate
        invoiceStatus
        invoiceType
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        addressId
        createdAt
        email
        id
        name
        updatedAt
        userId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
