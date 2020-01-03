import gql from "graphql-tag";
import React from "react";
import SigInContent from "./SignInContent";
const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(input:{email: $email, password: $password}) {
      token
    }
  }
`;

export default function SignIn() {
  return <SigInContent LOGIN={LOGIN} />;
}
