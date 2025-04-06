/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $tenants: String
  ) {
    onCreateAddress(filter: $filter, tenants: $tenants) {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $tenants: String
  ) {
    onCreateInvoice(filter: $filter, tenants: $tenants) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $tenants: String
  ) {
    onDeleteAddress(filter: $filter, tenants: $tenants) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $tenants: String
  ) {
    onDeleteInvoice(filter: $filter, tenants: $tenants) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $tenants: String
  ) {
    onUpdateAddress(filter: $filter, tenants: $tenants) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $tenants: String
  ) {
    onUpdateInvoice(filter: $filter, tenants: $tenants) {
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
