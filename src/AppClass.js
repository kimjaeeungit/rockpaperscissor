import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null, // 유저값
      computerSelect: null, // 컴퓨터값
      result: '', // 결과값
    };
  }
  choice = {
    rock: {
      name: 'Rock',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY24vXcxwnkJbGJi_nQWV6VNzVronsPHLtUk_dmCc_qHt-sJ9Qziuc82Yp2yOwVPNeOFM&usqp=CAU',
    },
    scissors: {
      name: 'Scissors',
      img: 'https://www.cleverpatch.com.au/Images/ProductImages/10896.jpg',
    },
    paper: {
      name: 'Paper',
      img: 'https://i.ebayimg.com/00/s/MTI4MVgxNTAw/z/G5kAAOSwmoRexd9C/$_1.JPG',
    },
  };
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: this.choice[userChoice],
      computerSelect: computerChoice,
      result: this.userJudgement(this.choice[userChoice], computerChoice),
    });
    console.log(
      '확인:',
      this.userJudgement(this.choice[userChoice], computerChoice)
    );
  };
  // 컴퓨터 선택 랜덤값 뽑기
  randomChoice = () => {
    //Object.keys : 객체의 키값만 뽑아서 배열에 넣어주는 것
    let itemArray = Object.keys(this.choice); //Array ["a","b","c"]
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return this.choice[final];
  };
  userJudgement = (user, computer) => {
    console.log(user, computer);
    // user == computer ->  tie
    // user == "rock", computer == "scissors" -> user 이김
    // user =="rock", computer == "paper" -> user 짐
    // user == "scissors", computer =="paper" -> user 이김
    // user == "scissors", computer =="rock" -> user 짐
    // user == "paper", computer =="rock" -> user 이김
    // user == "paper", computer =="scissors" -> user 짐

    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose';
  };
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="you"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
