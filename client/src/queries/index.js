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
export const getActiveUser=gql`
query{
    activeUser{
        id
        username
        createdAt
        snaps{
            id
            text
            createdAt
        }
    }
}`

export const getSnaps=gql`
query {
  snaps {
    id
    createdAt
    text
    user {
      id
      username
    }
  }
}
`
export const addSnap=gql`
mutation($text:String!,$userID:ID!){
  addSnap(data:{text:$text,userID:$userID}){
    id,createdAt,text,user{username,id}
  }
}
`
//subscription
export const newUserSubs=gql`
subscription {
  user {
    id
    username
  }
}
`
export const newSnapSubs=gql`
subscription($userID:ID) {
  snap(userID:$userID) {
    id
    text,
    createdAt
    user{
      username
      id
    }
  }
}
`