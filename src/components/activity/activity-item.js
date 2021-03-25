import React, { Component} from 'react'
import LeaderItem from '../leaders/leader-item'

import './activity.css'

class ActivityItem extends Component{
    state ={
        name: this.props.name,
        count: this.props.count,
        icon: this.props.icon
    }

    render(){
        const {name,count,icon} = this.state
            return(
                    <div className="activity-card">
                        <h4 className="name">{name}</h4>
                        <h4 className="award">+{count} <i class={icon}></i></h4>
                    </div>
            )
    }
}

export default ActivityItem;