import {Grid, GridProps, Paper} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";

interface Props {
    children: React.ReactNode;
    pageHeader?: React.ReactNode;
    headerProps?: GridProps;
    containerProps?: GridProps;
    childProps?: GridProps;
}

export function PageLayoutWrapper({children}: Props) {
    return (
        <Grid
            container
            component={Paper}
            direction={"column"}
            rowGap={2}
            sx={{background: "black"}}
            width={"100%"}
            height={"100%"}
        >
            {children}
        </Grid>
    );
}

export default function Layout() {
    return (
        <PageLayoutWrapper>
            <Outlet/>
        </PageLayoutWrapper>
    );
}
