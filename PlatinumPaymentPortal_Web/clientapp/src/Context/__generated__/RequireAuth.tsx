import * as React from "react";
import {Navigate} from "react-router-dom";
import {useAuthContext} from "../AuthContext";
import {UserContextProvider} from "../UserContext";

export default function RequireAuth({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const {authenticated} = useAuthContext();
    return <UserContextProvider>{children}</UserContextProvider>;
}
