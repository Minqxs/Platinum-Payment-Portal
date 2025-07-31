import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import { authService } from "./AuthenticationService";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
  rememberMe: Yup.boolean(),
});

export const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setError(null);
      try {
        await authService.login(values);
        // Redirect or update UI after login
        console.log("Login success!");
      } catch (err: any) {
        setError(err.message);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={formik.handleSubmit} noValidate>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
            }
            label="Remember me"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
