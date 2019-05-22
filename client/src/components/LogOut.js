import React from 'react'
import {ApolloConsumer} from 'react-apollo'
import {withRouter} from 'react-router-dom'

const onClick=(history,reset)=>{
    localStorage.setItem("token","")
    history.push("/")
    reset()
}

function LogOut({history}) {
     return (   
      <ApolloConsumer>
          {
              (client)=>{
                  return <button onClick={()=>onClick(history,client.resetStore)} >LogOut</button>
              }
          }
      </ApolloConsumer>
            
 )}
export default withRouter(LogOut)
