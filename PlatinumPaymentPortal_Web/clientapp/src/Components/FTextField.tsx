import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Tooltip, Typography } from "@mui/material";
import { FieldHookConfig, useField, useFormikContext } from "formik";

export function getStyles(
  error?: string,
  touched?: boolean
): React.CSSProperties {
  if (error && touched) {
    return {
      borderRadius: "5px",
      boxShadow: `inset 0px 0px 0px 2px #F4CD64`,
    };
  }
  return {};
}

type FTextFieldProps<Val> = {
  field: string | FieldHookConfig<Val>;
  showError?: boolean;
  showErrorCaption?: boolean;
  showToolTipError?: boolean;
} & TextFieldProps;

export function FTextField<Val = string>({
  showError,
  showErrorCaption,
  showToolTipError,
  disabled,
  variant = "filled",
  fullWidth = true,
  ...props
}: FTextFieldProps<Val>) {
  const [field, meta] = useField<Val>(props.field);
  const { isSubmitting } = useFormikContext();

  return (
    <Tooltip title={showToolTipError && meta.error ? meta.error : ""}>
      <div>
        <TextField
          {...props}
          {...field}
          fullWidth={fullWidth}
          disabled={isSubmitting ? isSubmitting : disabled}
          variant={variant}
          InputProps={{
            disableUnderline: true,
            ...props.InputProps,
            sx: {
              ...(showError ? getStyles(meta.error, meta.touched) : {}),
            },
          }}
        />
        {showErrorCaption && meta.error && (
          <Typography variant="body2" color="error">
            * {meta.error}
          </Typography>
        )}
      </div>
    </Tooltip>
  );
}
