import React, { Fragment } from 'react'
import ActivityItem from './activity-item';

const ActivityList = ({ activities }) =>{
var activitytemplate;
if (activities !== null){
    activitytemplate = activities.map(item =>{
        return(
            <ActivityItem
            name={item.name}
            count ={item.count}
            icon = {item.icon}
            >
            </ActivityItem>
    )
    })

    return(
        <Fragment>
            {activitytemplate}
        </Fragment>
    )
}
}

export default ActivityList;