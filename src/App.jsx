import React, { Component } from 'react'
import './App.css';
import Header from './header.jsx'
import BirdsQuestion from './BirdsQuestion.jsx'
import birdData from './BirdsData.js'
import BirdList from './BirdsList.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      random: this.random(birdData[0]),
      score: 0,
      birdImg: '3310589-crows-bird-shadow-silhouette.jpg',
      birdName: '*********',
      birdInformation: 'info',
      currentRound: 0,
    }
  }

  random = (arr) => {
    return Math.floor(Math.random() * Math.floor(arr.length));
  }

  birdNameAndImg = (birdDt) => {
    if (!birdDt) {
      this.setState({
        birdName: '*********',
        birdImg: '3310589-crows-bird-shadow-silhouette.jpg',
      })
      return
    }
    this.setState({
      birdImg: birdDt.img,
      birdName: birdDt.name,
    })
  }

  currentLvl = (fun) => {
    if(this.state.currentRound === 5){
      this.setState({
        currentRound: 0,
        score : 0,
      })
    }
    else {
      this.setState({
        currentRound: this.state.currentRound + 1,
        random : Math.floor(Math.random() * Math.floor(6)),
      })
    }
  }

  changeScore = (score) => {
    this.setState({
      score: this.state.score + score,
    })
  }


  render() {
    return (
      <div>
        <header>
          <div className='container'>
            <Header score={this.state.score}
              current={this.state.currentRound}
            />
          </div>
        </header>
        <div className='container'>
          <BirdsQuestion birdImg={this.state.birdImg}
            birdName={this.state.birdName}
            currentRound = {this.state.currentRound}
            randomNumber = {this.state.random}
          />
          <BirdList currentRound={this.state.currentRound}
            birdInfo={this.state.birdInformation}
            birdsData={birdData}
            birdNameAndImg={this.birdNameAndImg}
            changeScore={this.changeScore}
            currentLvl={this.currentLvl}
            randomNumb={this.state.random}
          />
        </div>
      </div>
    )
  }
}

export default App;