import React from 'react'
import gql from "graphql-tag";

import {Query} from 'react-apollo'

const GET_ACTIVE_USER=gql`
query{
    activeUser{
        username
    }
}
`


const withSession = Component => props => (
    <Query query={GET_ACTIVE_USER}>
      {({ data, loading, refetch }) => {
        if (loading) return null;
        // console.log(data)

        return <Component />;
        // return <Component {...props} refetch={refetch} session={data}/>;
      }}
    </Query>
  );
  
  export default withSession;