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
export declare type InvoiceCreateFormInputValues = {
  addressId?: string;
  invoiceType?: string;
  amount?: string;
  invoiceDate?: string;
  invoiceStatus?: string;
};
export declare type InvoiceCreateFormValidationValues = {
  addressId?: ValidationFunction<string>;
  invoiceType?: ValidationFunction<string>;
  amount?: ValidationFunction<string>;
  invoiceDate?: ValidationFunction<string>;
  invoiceStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceCreateFormOverridesProps = {
  InvoiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  addressId?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceType?: PrimitiveOverrideProps<TextFieldProps>;
  amount?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceDate?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceCreateFormProps = React.PropsWithChildren<
  {
    overrides?: InvoiceCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: InvoiceCreateFormInputValues,
    ) => InvoiceCreateFormInputValues;
    onSuccess?: (fields: InvoiceCreateFormInputValues) => void;
    onError?: (
      fields: InvoiceCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: InvoiceCreateFormInputValues,
    ) => InvoiceCreateFormInputValues;
    onValidate?: InvoiceCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function InvoiceCreateForm(
  props: InvoiceCreateFormProps,
): React.ReactElement;
