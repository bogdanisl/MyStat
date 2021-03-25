import React, { Component} from 'react'

import './achievements.css'

class AchievementItem extends Component{
    state ={
        name: this.props.name,
        image: this.props.image,

    }

    render(){
        const { name, image} = this.state
            return(
                <div className="super-card col-lg-4">
                    <div>
                    <img src={image} className="card-img-top" alt="..."/>
                        <div>
                            <h5>{name}</h5>
                        </div>
                    </div>
                </div>
            )
    }
}

export default AchievementItem;