import React from 'react'
import {Mutation} from 'react-apollo'
import {addUser} from '../queries/index'
import Error from '../Error'

const initialState={
    username:"",
    password:"",
    cPassword:""  
}
export default class Join extends React.Component {
    state={
      ...initialState
    }
    onChng=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }
    
    onSbmt = (e, func) => {
		e.preventDefault();
		func().then(data =>{
            this.setState({
                ...initialState
            })
        })
    };
    formValid=()=>{
        const {username,password,cPassword}=this.state
        const isValid= !username || !password || !cPassword || cPassword!==password
        return isValid
    }
    render(){
        const {username,password,cPassword}=this.state  
        return(
        <div>
         <Mutation mutation={addUser} variables={ { username,password } }>
         { (addUserFunc, { loading, error } ) => (
           	<form
               onSubmit={ e => {
                   this.onSbmt(e, addUserFunc)
               } }
               className="user-form">
                <label>
                    <input value={username} onChange={this.onChng} name="username" type="text" placeholder="username" />
                </label>
                <label>
                    <input value={password} onChange={this.onChng}  name="password" type="password" placeholder="password" />
                </label>
                <label> 
                    <input value={cPassword} onChange={this.onChng} name="cPassword" type="password" placeholder="confirm password" />
                </label>
                <label>
                    <button disabled={loading || this.formValid()} type="submit">Join</button>
                </label> 
                
                {loading && <div>Loading..</div>}
                {error && <Error error={error.message}/>}
            </form>
            )
          }
          </Mutation>
        </div>
        )
    }
}

