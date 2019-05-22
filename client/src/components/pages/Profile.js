import React, { Component } from 'react'
import Moment from 'react-moment';
import autHOC from '../autHOC';

 class Profile extends Component {
     
      render() { 
        const {activeUser}=this.props.session

        return (
            <div>
                <h3>Profile</h3>
                <Moment>{activeUser.createdAt}</Moment>
                <br/>
                <br/>
                <div><b>@{activeUser.username}</b></div>
            </div>
        )
    }
}
export default autHOC(session=>session && session.activeUser)(Profile)