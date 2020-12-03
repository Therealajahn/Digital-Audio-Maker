import './App.css';
import React, { useState } from 'react';


function App(){
  return(
    <div className="App">
      <Game />
    </div>
  )
};

function Square(props){
  return(
    <button 
      className="square" 
      onClick={()=>{props.onClick()}}>
        {props.value}
    </button>
  )
};

function Board(props){
 const [state,setState] = useState({
  squares: Array(9).fill(null),
  xIsNext: true,
})
 const handleClick = (i)=>{
   console.log(i);
   const squares = state.squares.slice();
   squares[i] = state.xIsNext ? 'X':'O';
   setState({
     squares: squares,
     xIsNext: !state.xIsNext,  
  });
 }
 const renderSquare = (i)=>{
   return (
    <Square 
      value={state.squares[i]}
      onClick={() => handleClick(i)}
      />
   )
}

  const status = `Next player: ${state.xIsNext ? 'X':'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game(props) {
  return(
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/*status*/}</div>
        <ol>{
        // todo
        }</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares){
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares === squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App;
