import React from 'react'
import { signIn } from '../../queries/index'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'

const initialState = {
    username: "",
    password: ""
}
 class Login extends React.Component {
    state = {
        ...initialState
    }
    onSbmt = (e,func) => {
        e.preventDefault();
        this.setState({
            ...initialState
        });
        func().then( async ({data})=>{
          try {
            localStorage.setItem("token",data.signIn.token);
            await this.props.refetch();
            this.props.history.push("/")
          } catch (error) {
              throw new Error(error)
          }})

    }
    onChng = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    loginValid = () => {
        const { username, password } = this.state
        return (!username || !password)
    }
    render() {
        const { username, password } = this.state
        return (
            <div>
                <Mutation mutation={signIn} variables={{username,password}}>
                    {(signIn, { loading, error }) => (
                        <form onSubmit={(e) => {
                            this.onSbmt(e,signIn)
                        }} className="user-form">
                            <label>
                                <input onChange={this.onChng} value={username} name="username" type="text" placeholder="username" />
                            </label>
                            <label>
                                <input onChange={this.onChng} value={password} name="password" type="password" placeholder="password" />
                            </label>
                            <label>
                                <button type="submit" disabled={this.loginValid()}>Login</button>
                            </label>
                        </form>
                    )
                    }</Mutation>

            </div>
        )
    }
}

export default withRouter(Login)