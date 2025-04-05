/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getInvoice } from "./graphql/queries";
import { updateInvoice } from "./graphql/mutations";
const client = generateClient();
export default function InvoiceUpdateForm(props) {
  const {
    id: idProp,
    invoice: invoiceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    addressId: "",
    invoiceType: "",
    amount: "",
    invoiceDate: "",
    invoiceStatus: "",
  };
  const [addressId, setAddressId] = React.useState(initialValues.addressId);
  const [invoiceType, setInvoiceType] = React.useState(
    initialValues.invoiceType,
  );
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [invoiceDate, setInvoiceDate] = React.useState(
    initialValues.invoiceDate,
  );
  const [invoiceStatus, setInvoiceStatus] = React.useState(
    initialValues.invoiceStatus,
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = invoiceRecord
      ? { ...initialValues, ...invoiceRecord }
      : initialValues;
    setAddressId(cleanValues.addressId);
    setInvoiceType(cleanValues.invoiceType);
    setAmount(cleanValues.amount);
    setInvoiceDate(cleanValues.invoiceDate);
    setInvoiceStatus(cleanValues.invoiceStatus);
    setErrors({});
  };
  const [invoiceRecord, setInvoiceRecord] = React.useState(invoiceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getInvoice.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getInvoice
        : invoiceModelProp;
      setInvoiceRecord(record);
    };
    queryData();
  }, [idProp, invoiceModelProp]);
  React.useEffect(resetStateValues, [invoiceRecord]);
  const validations = {
    addressId: [],
    invoiceType: [],
    amount: [],
    invoiceDate: [],
    invoiceStatus: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue,
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          addressId: addressId ?? null,
          invoiceType: invoiceType ?? null,
          amount: amount ?? null,
          invoiceDate: invoiceDate ?? null,
          invoiceStatus: invoiceStatus ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item),
                ),
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName]),
            );
            return promises;
          }, []),
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateInvoice.replaceAll("__typename", ""),
            variables: {
              input: {
                id: invoiceRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "InvoiceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Address id"
        isRequired={false}
        isReadOnly={false}
        value={addressId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addressId: value,
              invoiceType,
              amount,
              invoiceDate,
              invoiceStatus,
            };
            const result = onChange(modelFields);
            value = result?.addressId ?? value;
          }
          if (errors.addressId?.hasError) {
            runValidationTasks("addressId", value);
          }
          setAddressId(value);
        }}
        onBlur={() => runValidationTasks("addressId", addressId)}
        errorMessage={errors.addressId?.errorMessage}
        hasError={errors.addressId?.hasError}
        {...getOverrideProps(overrides, "addressId")}
      ></TextField>
      <TextField
        label="Invoice type"
        isRequired={false}
        isReadOnly={false}
        value={invoiceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addressId,
              invoiceType: value,
              amount,
              invoiceDate,
              invoiceStatus,
            };
            const result = onChange(modelFields);
            value = result?.invoiceType ?? value;
          }
          if (errors.invoiceType?.hasError) {
            runValidationTasks("invoiceType", value);
          }
          setInvoiceType(value);
        }}
        onBlur={() => runValidationTasks("invoiceType", invoiceType)}
        errorMessage={errors.invoiceType?.errorMessage}
        hasError={errors.invoiceType?.hasError}
        {...getOverrideProps(overrides, "invoiceType")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        value={amount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addressId,
              invoiceType,
              amount: value,
              invoiceDate,
              invoiceStatus,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label="Invoice date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={invoiceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addressId,
              invoiceType,
              amount,
              invoiceDate: value,
              invoiceStatus,
            };
            const result = onChange(modelFields);
            value = result?.invoiceDate ?? value;
          }
          if (errors.invoiceDate?.hasError) {
            runValidationTasks("invoiceDate", value);
          }
          setInvoiceDate(value);
        }}
        onBlur={() => runValidationTasks("invoiceDate", invoiceDate)}
        errorMessage={errors.invoiceDate?.errorMessage}
        hasError={errors.invoiceDate?.hasError}
        {...getOverrideProps(overrides, "invoiceDate")}
      ></TextField>
      <TextField
        label="Invoice status"
        isRequired={false}
        isReadOnly={false}
        value={invoiceStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              addressId,
              invoiceType,
              amount,
              invoiceDate,
              invoiceStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.invoiceStatus ?? value;
          }
          if (errors.invoiceStatus?.hasError) {
            runValidationTasks("invoiceStatus", value);
          }
          setInvoiceStatus(value);
        }}
        onBlur={() => runValidationTasks("invoiceStatus", invoiceStatus)}
        errorMessage={errors.invoiceStatus?.errorMessage}
        hasError={errors.invoiceStatus?.hasError}
        {...getOverrideProps(overrides, "invoiceStatus")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || invoiceModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || invoiceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
