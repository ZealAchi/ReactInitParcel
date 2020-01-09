import React from 'react'
import gql from "graphql-tag";

import { Query } from 'react-apollo'

const GET_ACTIVE_USER = gql`
query{
  activeUser{
    id
    email
    role
    name
    isAdmin
    lastName
    secondLastName
  }
}
`


const withSession = Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {({ data, loading, refetch }) => {
      if (loading)  return( <div
      style={{
        textAlign: 'center',
        height: 'inherit'
      }}
    > <img src={require('./assests/images/Loading.gif')} /></div>)
      return <Component {...props} refetch={refetch} session={data}/>;
     
    }}
  </Query>
);

export default withSession;