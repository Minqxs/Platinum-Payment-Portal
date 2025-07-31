import React from "react";
import { graphql } from "react-relay";
import { RoleEnum } from "./__generated__/UserContextQuery.graphql";

type UserType = { userName: string; roles: RoleEnum[]; id: string };
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
  }
`;

const UserContext = React.createContext<UserContextType>({
  user: {
    id: "",
    userName: "",
    roles: [],
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

export function UserContextProvider({ children }: Props) {
  return <></>;
}
