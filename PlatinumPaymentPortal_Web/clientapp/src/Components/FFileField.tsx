import React from "react";
import {useField, useFormikContext} from "formik";
import {Button, Typography, Stack, Link} from "@mui/material";

type Props = {
    field: string;
    label: string;
    downloadUrl?: string; // optional pre-signed URL or backend route
};

export const FFileField = ({field, label, downloadUrl}: Props) => {
    const [fileField, , helpers] = useField<File | string | null>(field);
    const {setFieldValue} = useFormikContext();

    const value = fileField.value;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0] ?? null;
        setFieldValue(field, file);
    };

    return (
        <Stack spacing={1}>
            <Typography>{label}</Typography>

            {value && typeof value === "string" && (
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2">Current file: {value}</Typography>
                    {downloadUrl && (
                        <Link href={downloadUrl} target="_blank" rel="noopener">
                            Download
                        </Link>
                    )}
                </Stack>
            )}

            {value && typeof value !== "string" && (
                <Typography variant="body2" color="primary">
                    Selected file: {value.name}
                </Typography>
            )}

            <Button variant="outlined" component="label">
                {value ? "Replace File" : "Upload File"}
                <input type="file" hidden onChange={handleFileChange}/>
            </Button>

            {value && (
                <Button
                    color="error"
                    size="small"
                    onClick={() => helpers.setValue(null)}
                >
                    Remove File
                </Button>
            )}
        </Stack>
    );
};
