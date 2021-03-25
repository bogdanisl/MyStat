import React, { Fragment } from 'react'
import LeaderItem from './leader-item';

const LeaderList = ({ leaders }) =>{
var leaderTemplate;
if (leaders !== null){
    leaderTemplate = leaders.map(item =>{
        return(
            <LeaderItem
            name={item.name}
            number ={item.number}
            >
            </LeaderItem>
    )
    })

    return(
        <Fragment>
            {leaderTemplate}
        </Fragment>
    )
}
}

export default LeaderList;