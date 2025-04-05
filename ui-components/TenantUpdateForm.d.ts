import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tenant } from "./graphql/types";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type TenantUpdateFormInputValues = {
  userId?: string;
  addressId?: string;
  name?: string;
  email?: string;
};
export declare type TenantUpdateFormValidationValues = {
  userId?: ValidationFunction<string>;
  addressId?: ValidationFunction<string>;
  name?: ValidationFunction<string>;
  email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type TenantUpdateFormOverridesProps = {
  TenantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userId?: PrimitiveOverrideProps<TextFieldProps>;
  addressId?: PrimitiveOverrideProps<TextFieldProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: TenantUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    tenant?: Tenant;
    onSubmit?: (
      fields: TenantUpdateFormInputValues,
    ) => TenantUpdateFormInputValues;
    onSuccess?: (fields: TenantUpdateFormInputValues) => void;
    onError?: (
      fields: TenantUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: TenantUpdateFormInputValues,
    ) => TenantUpdateFormInputValues;
    onValidate?: TenantUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function TenantUpdateForm(
  props: TenantUpdateFormProps,
): React.ReactElement;
