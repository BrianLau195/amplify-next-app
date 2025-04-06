/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      address
      createdAt
      id
      invoices {
        nextToken
        __typename
      }
      nickname
      tenants
      updatedAt
      __typename
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      address {
        address
        createdAt
        id
        nickname
        tenants
        updatedAt
        __typename
      }
      addressId
      amount
      createdAt
      id
      invoiceDate
      invoiceStatus
      invoiceType
      tenants
      updatedAt
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAddresses(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        address
        createdAt
        id
        nickname
        tenants
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
        addressId
        amount
        createdAt
        id
        invoiceDate
        invoiceStatus
        invoiceType
        tenants
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
