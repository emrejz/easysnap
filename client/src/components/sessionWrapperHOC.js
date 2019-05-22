import React from 'react'
import {Query} from 'react-apollo'
import {getActiveUser} from './queries/index'

const sessionWrapperHOC=Component=>props=>(
    <Query query={getActiveUser}>
        {
            ({data,loading,error})=>{
                if(loading) return <div style={{textAlign:"center"}}>Loading..</div>
              console.log(data)
                return <Component {...props}/>
            }
        }
    </Query>
)
export default sessionWrapperHOC;