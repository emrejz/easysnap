import React from 'react'
import {Query} from 'react-apollo'
import {getActiveUser} from './queries/index'

const sessionWrapperHOC=Component=>props=>(
    <Query query={getActiveUser}>
        {
            ({data,loading,error,refetch})=>{
                if(loading) return <div style={{textAlign:"center"}}>Loading..</div>
              console.log(data)
                return <Component {...props} refetch={refetch}/>
            }
        }
    </Query>
)
export default sessionWrapperHOC;