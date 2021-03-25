import React, { Component } from 'react'
import './App.css';
import ActivityList from './components/activity/activity-list';
import LeaderList from './components/leaders/leader-list';
import AchievementList from './components/navbar/achievements/achievements-list';
import Navbar from './components/navbar/navbar';

class App extends Component {

  state ={
    achievements: [
      {
        name: "5 раз подряд посетил академию",
        image: 'https://i.pinimg.com/originals/e4/f8/89/e4f889cb550edb2ff28a22312b790fc2.png',
      },
      {
        name: "10 раз подряд посетил академию",
        image: 'https://s.pfst.net/2013.05/28427388186865841c056e94fe5ba9a2dea1810e9d5_b.jpg',
      },
      {
        name: "20 раз подряд посетил академию",
        image: 'https://s.pfst.net/2013.03/212434988065cfbe2e2a72f787d33400a90e46643fe_b.jpg',
      },
      {
        name: "5 раз подряд без опозданий",
        image: 'https://i.pinimg.com/originals/e4/f8/89/e4f889cb550edb2ff28a22312b790fc2.png',
      },
      {
        name: "10 раз подряд без опозданий",
        image: 'https://s.pfst.net/2013.05/28427388186865841c056e94fe5ba9a2dea1810e9d5_b.jpg',
      },
      {
        name: "20 раз подряд без опозданий",
        image: 'https://s.pfst.net/2013.03/212434988065cfbe2e2a72f787d33400a90e46643fe_b.jpg',
      }
    ],
    leaders:[
      {
        name: 'Рябий Андрій',
        number: '1. '
      },
      {
        name: 'Зубенко Михайло',
        number: '2. '
      },
      {
        name: 'Боярскій Андрій',
        number: '3. '
      },
      {
        name: 'Нольяадінка Сергій',
        number: '4. '
      },
      {
        name: 'Моставчук Петро',
        number: '5. '
      }
    ],
    activities:[
      {
        name: 'Посещение урока',
        count: '1',
        icon: 'fas fa-gem'
      },
      {
        name: 'Полностью заполненый профиль',
        count: '1',
        icon: 'fab fa-bitcoin'
      },
    ]
    
  }
  render(){
    return(
      <div>
      <Navbar></Navbar>
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-4">

            <div className=" card-padding">
            <h3>ВАШИ НАГРАДЫ</h3>
              <div className="row achievements">
                  <AchievementList achievements={this.state.achievements}></AchievementList>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className=" card-padding">
            <h3>ТАБЛИЦА ЛИДЕРОВ</h3>
            <LeaderList leaders={this.state.leaders}></LeaderList>
            </div>
          </div>
          <div className="col-lg-4">
            <div className=" card-padding">
            <h3>АКТИВНОСТЬ</h3>
            <ActivityList activities={this.state.activities}></ActivityList>
            </div>
          </div>
          </div>
        </div>
      </div>
      )
  }
}

export default App;
