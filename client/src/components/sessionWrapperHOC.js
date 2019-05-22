import React from 'react'
import {Query} from 'react-apollo'
import {getActiveUser} from './queries/index'

const sessionWrapperHOC=Component=>props=>(
    <Query query={getActiveUser}>
        {
            ({data,loading,error,refetch})=>{
                if(loading) return <div style={{textAlign:"center"}}>Loading..</div>
          
                return <Component {...props} refetch={refetch} session={data}/>
            }
        }
    </Query>
)
export default sessionWrapperHOC;