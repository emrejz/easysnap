import React, { Component } from 'react'
import SnapList from '../SnapList'
import SnapForm from '../SnapForm'
import NewUser from '../NewUser'



export default class Home extends Component {
    
    render() {
        return (
            <div>
                <div className="description">
                    <p className="sub_header__desc">simple snap app with <span>react</span>.</p>
                </div>
                <SnapForm session={this.props.session} />
                <NewUser/>
                <SnapList session={this.props.session}/>
            </div>
        )
    }
}

