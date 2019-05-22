import React from 'react'
import {Query} from 'react-apollo'
import {getActiveUser} from './queries/index'
import {Redirect} from 'react-router-dom'

const autHOC=condition=>Component=>props=>(
    <Query query={getActiveUser}>
        {
            ({data,loading})=>{
                console.log(data)
                if(loading) return null;
                return condition(data) ? <Component {...props} /> : <Redirect to="/"/>
            }   
        }
    </Query>
)
export default autHOC