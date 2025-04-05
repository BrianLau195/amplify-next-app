import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Address } from "./graphql/types";
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
export declare type AddressUpdateFormInputValues = {
  address?: string;
  nickname?: string;
};
export declare type AddressUpdateFormValidationValues = {
  address?: ValidationFunction<string>;
  nickname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type AddressUpdateFormOverridesProps = {
  AddressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  address?: PrimitiveOverrideProps<TextFieldProps>;
  nickname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddressUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: AddressUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    address?: Address;
    onSubmit?: (
      fields: AddressUpdateFormInputValues,
    ) => AddressUpdateFormInputValues;
    onSuccess?: (fields: AddressUpdateFormInputValues) => void;
    onError?: (
      fields: AddressUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: AddressUpdateFormInputValues,
    ) => AddressUpdateFormInputValues;
    onValidate?: AddressUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function AddressUpdateForm(
  props: AddressUpdateFormProps,
): React.ReactElement;
