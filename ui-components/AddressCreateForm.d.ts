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
export declare type AddressCreateFormInputValues = {
  address?: string;
  nickname?: string;
};
export declare type AddressCreateFormValidationValues = {
  address?: ValidationFunction<string>;
  nickname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type AddressCreateFormOverridesProps = {
  AddressCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  address?: PrimitiveOverrideProps<TextFieldProps>;
  nickname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddressCreateFormProps = React.PropsWithChildren<
  {
    overrides?: AddressCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: AddressCreateFormInputValues,
    ) => AddressCreateFormInputValues;
    onSuccess?: (fields: AddressCreateFormInputValues) => void;
    onError?: (
      fields: AddressCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: AddressCreateFormInputValues,
    ) => AddressCreateFormInputValues;
    onValidate?: AddressCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function AddressCreateForm(
  props: AddressCreateFormProps,
): React.ReactElement;
