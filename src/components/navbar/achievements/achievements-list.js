import React, { Fragment } from 'react'
import AchievementItem from './achievements-item'

const AchievementList = ({ achievements }) =>{
var achievementsTemplate;
if (achievements !== null){
    achievementsTemplate = achievements.map(item =>{
        return(
            <AchievementItem
                name={item.name}
                image = {item.image}
            ></AchievementItem>
    )
    })

    return(
        <Fragment>
            {achievementsTemplate}
        </Fragment>
    )
}
}

export default AchievementList;