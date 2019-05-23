import React, { Component } from 'react'
import { getSnaps } from './queries/index'
import { Query } from 'react-apollo'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
 
const formatter = buildFormatter(frenchStrings)

export default class SnapList extends Component {
    render() {
        return (
            <Query    query={getSnaps}>
                    {({ data, loading, error }) => {
                       
                        if (loading) return <div className="loading">Loading</div>
                        if (error) return <div>error</div>
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
