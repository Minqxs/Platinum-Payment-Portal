import { Grid, GridProps } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  pageHeader?: React.ReactNode;
  headerProps?: GridProps;
  containerProps?: GridProps;
  childProps?: GridProps;
}

export function PageLayoutWrapper({
  children,
  pageHeader,
  headerProps,
  containerProps,
  childProps,
}: Props) {
  return (
    <Grid container rowGap={2} sx={{ background: "black" }}>
      {children}
    </Grid>
  );
}

export default function Layout() {
  return (
    <PageLayoutWrapper>
      <Outlet />
    </PageLayoutWrapper>
  );
}
