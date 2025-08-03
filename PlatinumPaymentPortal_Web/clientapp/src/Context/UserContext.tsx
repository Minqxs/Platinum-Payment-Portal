import React from "react";
import {graphql, useLazyLoadQuery} from "react-relay";
import {
    RoleEnum,
    UserContextQuery,
} from "./__generated__/UserContextQuery.graphql";

type UserType = {
    userName: string;
    roles: RoleEnum[];
    id: string;
    fullName: string;
};

interface UserContextType {
    user: UserType;

    hasRole(role: RoleEnum): boolean;

    hasRoles(roles: RoleEnum[]): boolean;
}

const query = graphql`
    query UserContextQuery {
        me {
            ...UserContext_user @relay(mask: false)
        }
    }
`;
graphql`
    fragment UserContext_user on User {
        id
        userName
        roles
        fullName
    }
`;

const UserContext = React.createContext<UserContextType>({
    user: {
        id: "",
        userName: "",
        roles: [],
        fullName: "",
    },
    hasRole: () => true,
    hasRoles: () => true,
});

export const useUserContext = () =>
    React.useContext<UserContextType>(UserContext);
export const useHasRole = () =>
    React.useContext<UserContextType>(UserContext).hasRole;
export const useHasRoles = () =>
    React.useContext<UserContextType>(UserContext).hasRoles;

interface Props {
    children: React.ReactNode;
}

export function UserContextProvider({children}: Props) {
    const data = useLazyLoadQuery<UserContextQuery>(
        query,
        {},
        {fetchPolicy: "network-only"}
    );

    const hasRole = (role: RoleEnum) => {
        if (data && data?.me?.roles?.indexOf(role) !== -1) {
            return true;
        }

        return false;
    };
    const hasRoles = (searchRoles: RoleEnum[]) => {
        for (const role of searchRoles) {
            if (data && data?.me?.roles?.indexOf(role) !== -1) {
                return true;
            }
        }

        return false;
    };

    const user: UserType = {
        userName: data?.me?.userName ?? "",
        roles: data?.me?.roles.map((r) => r),
        id: data?.me?.id ?? "",
        fullName: data?.me.fullName ?? "",
    };

    const value = {user, hasRole, hasRoles};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
