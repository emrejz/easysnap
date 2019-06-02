import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import autHOC from '../autHOC';

 class Profile extends Component {
     
      render() { 
        const {activeUser}=this.props.session

        return (
            <div>
                <h2>Profile of <b style={{"color":"orange"}}>{activeUser.username}</b></h2>
                <h5>Account created at <TimeAgo date={activeUser.createdAt}/></h5>
                <br/>
                <br/>
            
            </div>
        )
    }
}
export default autHOC(session=>session && session.activeUser)(Profile)