import React from 'react'
import {Query} from 'react-apollo'
import {getActiveUser} from './queries/index'

const sessionWrapperHOC=Component=>props=>(
    <Query query={getActiveUser}>
        {
            ({loading,error})=>{
                if(loading) return <div style={{textAlign:"center"}}>Loading..</div>
              //  if(error)  return <div style={{textAlign:"center"}}>Error</div>
                return <Component />
            }
        }
    </Query>
)
export default sessionWrapperHOC;