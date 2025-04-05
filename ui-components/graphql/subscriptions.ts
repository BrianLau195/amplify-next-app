/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onCreateAddress(filter: $filter, owner: $owner) {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice(
    $Admin: String
    $filter: ModelSubscriptionInvoiceFilterInput
  ) {
    onCreateInvoice(Admin: $Admin, filter: $filter) {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant(
    $filter: ModelSubscriptionTenantFilterInput
    $userId: String
  ) {
    onCreateTenant(filter: $filter, userId: $userId) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onDeleteAddress(filter: $filter, owner: $owner) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice(
    $Admin: String
    $filter: ModelSubscriptionInvoiceFilterInput
  ) {
    onDeleteInvoice(Admin: $Admin, filter: $filter) {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant(
    $filter: ModelSubscriptionTenantFilterInput
    $userId: String
  ) {
    onDeleteTenant(filter: $filter, userId: $userId) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onUpdateAddress(filter: $filter, owner: $owner) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice(
    $Admin: String
    $filter: ModelSubscriptionInvoiceFilterInput
  ) {
    onUpdateInvoice(Admin: $Admin, filter: $filter) {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant(
    $filter: ModelSubscriptionTenantFilterInput
    $userId: String
  ) {
    onUpdateTenant(filter: $filter, userId: $userId) {
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
