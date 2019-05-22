import React, { Component } from 'react'
import SnapList from '../SnapList'
import {Mutation} from 'react-apollo'
import {addSnap,getSnaps} from '../queries/index'


export default class Home extends Component {
    state={
        text:"",
        userID:""
    }
    onChng=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount() {     
       if(this.props.session.activeUser){
           this.setState({
            userID:this.props.session.activeUser.id
           })
       }
    }
    onSbmt=(e,addSnap)=>{
        e.preventDefault();
        if(this.state.text){
        addSnap().then(({data})=>{
            this.setState({
                text: ""
            });
        })}
    }

    render() {
        return (
            <div>
                <div className="description">
                    <p className="sub_header__desc">simple snap app with <span>react</span>.</p>
                </div>
                <div>
                    <Mutation 
                      mutation={addSnap} 
                      refetchQueries={[{ query: getSnaps }]}
                      variables={{...this.state}}>
                        {(addSnap,{loading,error})=>(
                            <form onSubmit={(e)=>{
                                this.onSbmt(e,addSnap)
                            }}>
                            <input 
                             name="text"
                             value={this.state.text}
                             onChange={this.onChng}
                             disabled={!this.props.session.activeUser || loading}
                             className="add-snap__input"
                             type="text"
                             placeholder="add snap" />
                        </form>
                        )}
                    </Mutation>
                </div>
                <SnapList/>
            </div>
        )
    }
}

