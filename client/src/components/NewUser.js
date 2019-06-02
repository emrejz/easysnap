import React from 'react'
import {Subscription} from 'react-apollo'
import {newUserSubs} from '../queries/index'

const NewUser=()=>(
    <Subscription subscription={newUserSubs}>
        {({data,loading})=>(    
            !loading && <div className="subJoin"><b>{data.user.username}</b> joined us</div> 
        )}
    </Subscription>
)
export default NewUser