import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import LogOut from './LogOut';
const LoginYes = ({ name }) => (
    <Fragment>  
        <NavLink to="/profile">@{name}</NavLink>
        <LogOut />
    </Fragment>

)
const LoginNo = () => (
    <Fragment>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/join">join</NavLink>
    </Fragment>
)

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h2 className="logo__title">easysnap</h2>
                </div>
                <div className="header_menu">
                    <NavLink to="/" exact>snaps</NavLink>
                    {
                        this.props.session.activeUser ? <LoginYes name={this.props.session.activeUser.username} /> : <LoginNo />
                    }
                </div>
            </div>
        )
    }
}
