const {gql}=require("apollo-boost")

export const addUser= gql`
mutation($username:String!, $password:String!) {
    addUser(data:{username:$username,password:$password }) {
        token
    }
}
`;
export const signIn= gql`
mutation($username:String!, $password:String!) {
    signIn(data:{username:$username,password:$password }) {
        token
    }
}
`;