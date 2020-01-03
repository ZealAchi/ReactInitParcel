import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const  LOGIN = gql`
mutation login($input:Login!) {
  Login(email: $email, password: $password) {
    token
  }
}
`;


export default () => {
  let [mutate] = useMutation(LOGIN);

  return ({ email, password }) => {
    return mutate({
      variables: { input: { email, password } },
    });
  };
};