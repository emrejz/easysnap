import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import {addSnap,getSnaps} from '../queries/index'

export default class SnapForm extends Component {
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
            this.setState({
                text: ""
            });
        addSnap().then(({data})=>{
        })}
    }
    updateCache=(cache,{data:addSnap})=>{
      const {snaps}=cache.readQuery({
          query:getSnaps
      })
      cache.writeQuery({
        query:getSnaps,
        data:{ 
            snaps:[addSnap.addSnap,...snaps]
        }
      })
    };
    render() {
        const {session}=this.props;
        const optimisticRes={
            __typename:"Mutation",
             addSnap:{
             __typename:"Snap",
            id:-Math.round(Math.random()*99999),
            text:this.state.text,
            createdAt:new Date(),
            user:{
                __typename:"User",
                ...session.activeUser
            }
         }
         };
        return (
            <div>
            <Mutation 
              mutation={addSnap} 
             // refetchQueries={[{ query: getSnaps }]}
             update={this.updateCache}
             optimisticResponse={optimisticRes}
              variables={{...this.state}}>
                {(addSnap,{loading,error})=>(
                    <form onSubmit={(e)=>{
                        this.onSbmt(e,addSnap)
                    }}>
                    <input
                     id="text" 
                     name="text"
                     value={this.state.text}
                     onChange={this.onChng}
                     disabled={!this.props.session.activeUser}
                     className="add-snap__input"
                     type="text"
                     placeholder="add snap" />
                </form>
                )}
            </Mutation>
        </div>
        )
    }
}
