import * as React from "react";
import Loading from "../Components/Loading";

interface AuthContextType {
    authenticated: boolean;

    handleLogin(): void;

    handleLogout(): void;
}

const AuthContext = React.createContext<AuthContextType>({
    authenticated: false,
    handleLogin: () => {
    },
    handleLogout: () => {
    },
});
export const useAuthContext = () =>
    React.useContext<AuthContextType>(AuthContext);

export const AuthContextController = React.memo(function AuthContextController({
                                                                                   children,
                                                                               }: {
    children: React.ReactNode;
}) {
    const [initialized, setInitialized] = React.useState(false);
    const [authenticated, setAuthenticated] = React.useState(() => false);

    React.useEffect(() => {
        async function profile() {
            try {
                const result = await fetch("/api/auth/profile");
                if (result.ok) {
                    setAuthenticated(true);
                }
            } finally {
                setInitialized(true);
            }
        }

        profile();
    }, [setAuthenticated, setInitialized]);

    const handleLogin = React.useCallback(() => {
        setAuthenticated(true);
    }, [setAuthenticated]);
    const handleLogout = React.useCallback(() => {
        fetch("api/auth/logout", {
            method: "POST",
        });
        setAuthenticated(false);
    }, [setAuthenticated]);

    const value = React.useMemo(
        () => ({authenticated, handleLogin, handleLogout}),
        [authenticated, handleLogin, handleLogout]
    );

    if (!initialized) {
        return <Loading title="Authorisation Loading"/>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
});
