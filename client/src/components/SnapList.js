import React, { Component } from 'react'
import { getSnaps,newSnapSubs } from '../queries'
import { Query } from 'react-apollo'
import TimeAgo from 'react-timeago'
 


export default class SnapList extends Component {
     
    render() {
        const {session}=this.props
        return (
            <Query     query={getSnaps}>
                    {({ data, subscribeToMore, loading, error }) => {
                        if (loading) return <div className="loading">Loading</div>
                        if (error) return <div>{error.message}</div>
                        subscribeToMore({
                            document:newSnapSubs,
                            variables:{userID:session.activeUser ? session.activeUser.id : "" },
                            updateQuery:(prev,{subscriptionData})=>{
                                const newItem=subscriptionData.data.snap
                                if(newItem){
                                  if(prev.snaps.find(snap=>snap.id===newItem.id)) return prev
								  else return {snaps:[newItem,...prev.snaps]}
                                  
                              }else return prev
                            }
                        });
                        return <div>
                            <ul className="snaps">
                                {data.snaps.map(snap =>
                                    <li key={snap.id} className={snap.id<0 ? "optimistic" : ""} >
                                        <div className="title">
                                            <span>@{snap.user.username} </span>{snap.text}
                                        </div>
                                        <div className="date">
                                            {snap.id<0 ? <span>Sending..</span> :
                                            <TimeAgo  date={snap.createdAt} />}
                                        </div>
                                    </li>)}
                            </ul>
                            <div className="counter">{data.snaps.length} snap(s)</div>
                        </div>
                    }}
                </Query>
        )
    }
}
