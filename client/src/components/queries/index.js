const {gql}=require("apollo-boost")

export const addUser= gql`
mutation($username:String!, $password:String!) {
    addUser(data:{username:$username,password:$password }) {
        token
    }
}
`;