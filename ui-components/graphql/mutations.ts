/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $condition: ModelAddressConditionInput
    $input: CreateAddressInput!
  ) {
    createAddress(condition: $condition, input: $input) {
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $condition: ModelInvoiceConditionInput
    $input: CreateInvoiceInput!
  ) {
    createInvoice(condition: $condition, input: $input) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $condition: ModelAddressConditionInput
    $input: DeleteAddressInput!
  ) {
    deleteAddress(condition: $condition, input: $input) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $condition: ModelInvoiceConditionInput
    $input: DeleteInvoiceInput!
  ) {
    deleteInvoice(condition: $condition, input: $input) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $condition: ModelAddressConditionInput
    $input: UpdateAddressInput!
  ) {
    updateAddress(condition: $condition, input: $input) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $condition: ModelInvoiceConditionInput
    $input: UpdateInvoiceInput!
  ) {
    updateInvoice(condition: $condition, input: $input) {
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
