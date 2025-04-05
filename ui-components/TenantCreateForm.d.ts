import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TenantCreateFormInputValues = {
  userId?: string;
  addressId?: string;
  name?: string;
  email?: string;
};
export declare type TenantCreateFormValidationValues = {
  userId?: ValidationFunction<string>;
  addressId?: ValidationFunction<string>;
  name?: ValidationFunction<string>;
  email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type TenantCreateFormOverridesProps = {
  TenantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  userId?: PrimitiveOverrideProps<TextFieldProps>;
  addressId?: PrimitiveOverrideProps<TextFieldProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantCreateFormProps = React.PropsWithChildren<
  {
    overrides?: TenantCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: TenantCreateFormInputValues,
    ) => TenantCreateFormInputValues;
    onSuccess?: (fields: TenantCreateFormInputValues) => void;
    onError?: (
      fields: TenantCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: TenantCreateFormInputValues,
    ) => TenantCreateFormInputValues;
    onValidate?: TenantCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function TenantCreateForm(
  props: TenantCreateFormProps,
): React.ReactElement;
