import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './component/Box';

//1. box 2 (title, image, result)
//2. 가위,바위,보 버튼
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)
const choice = {
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
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const [comResult, setComResult] = useState('');
  const play = (userChoice) => {
    let computerChoice = randomChoice();
    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);
    setResult(userJudgement(choice[userChoice], computerChoice)); //유저선택, 컴퓨터 선택 값
    setComResult(comJudgement(choice[userChoice], computerChoice));
  };
  const userJudgement = (user, computer) => {
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
  const comJudgement = (user, computer) => {
    if (computer.name == user.name) {
      return 'tie';
    } else if (computer.name == 'Rock')
      return user.name == 'Scissors' ? 'win' : 'lose';
    else if (computer.name == 'Scissors')
      return user.name == 'Paper' ? 'win' : 'lose';
    else if (computer.name == 'Paper')
      return user.name == 'Rock' ? 'win' : 'lose';
  };

  // 컴퓨터 선택 랜덤값 뽑기
  const randomChoice = () => {
    //Object.keys : 객체의 키값만 뽑아서 배열에 넣어주는 것
    let itemArray = Object.keys(choice); //Array ["a","b","c"]
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={comResult} />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
