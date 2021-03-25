import React, { Component} from 'react'

import './leader.css'

class LeaderItem extends Component{
    state ={
        name: this.props.name,
        number: this.props.number
    }

    render(){
        const {name,number} = this.state
            return(
                    <div className="leader-item">
                            <h5>{number}{name}</h5>
                    </div>
            )
    }
}

export default LeaderItem;