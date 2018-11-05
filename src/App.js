import React, { Component } from 'react';
import Header from './components/Header/Header.js';  
import Statsbar from './components/Statsbar/Statsbar.js';
import Card from './components/Card/Card.js';
import Characters from './characters.json';
import logo from './logo.svg';
import './App.css';

let score = 0;
let topscore = 0;

class App extends Component {
  game = {
    Characters,
    topscore,
    score
  }
  clicked = id => {
    const Characters = this.game.Characters;
    const clickedCard = Characters.filter(Character => Character.id === id);

    if (clickedCard[0].clicked) {

      score = 0;
      for (let i = 0; i<Characters.length; i++) {
        Characters[i].clicked = false;
      }
      this.setState({score})
      this.setState({Characters})
    }

    else {
      clickedCard[0].clicked= true;
      score++;
      if (score>topscore) {
        topscore=score;
        this.setState({topscore})
      }
      this.setState({score})
      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      })
    }
  }
      
  render() {
    return (
      <div>
      <Header />
      <Statsbar score={score} topscore={topscore} />
      <div className="charbox">   
        {this.game.Characters.map(Character => (
          <Card
            clicked={this.clicked}
            id={Character.id}
            img={Character.img}
            name={Character.name}
          />
        ))}
      </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
