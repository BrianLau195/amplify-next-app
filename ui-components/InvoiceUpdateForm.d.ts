import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Invoice } from "./graphql/types";
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
export declare type InvoiceUpdateFormInputValues = {
  addressId?: string;
  invoiceType?: string;
  amount?: string;
  invoiceDate?: string;
  invoiceStatus?: string;
};
export declare type InvoiceUpdateFormValidationValues = {
  addressId?: ValidationFunction<string>;
  invoiceType?: ValidationFunction<string>;
  amount?: ValidationFunction<string>;
  invoiceDate?: ValidationFunction<string>;
  invoiceStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceUpdateFormOverridesProps = {
  InvoiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  addressId?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceType?: PrimitiveOverrideProps<TextFieldProps>;
  amount?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceDate?: PrimitiveOverrideProps<TextFieldProps>;
  invoiceStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: InvoiceUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    invoice?: Invoice;
    onSubmit?: (
      fields: InvoiceUpdateFormInputValues,
    ) => InvoiceUpdateFormInputValues;
    onSuccess?: (fields: InvoiceUpdateFormInputValues) => void;
    onError?: (
      fields: InvoiceUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: InvoiceUpdateFormInputValues,
    ) => InvoiceUpdateFormInputValues;
    onValidate?: InvoiceUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function InvoiceUpdateForm(
  props: InvoiceUpdateFormProps,
): React.ReactElement;
