import React, { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';
import Overlay from './components/Overlay';



function App() {
  const [turnO, setTurnO] = useState(Math.random() < 0.5);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);



  const handleCellClick = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    const newBoard = [...board];                       
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);


    const winner = checkWinner(newBoard);

    if (winner) {
      setScores((prevScores) => ({
        ...prevScores, [winner.toLowerCase()]: prevScores[winner.toLowerCase()] + 1,
      }));
      setWinner(winner);
      setGameOver(true);
    } 

    else if (newBoard.every((cell) => cell !== null)) {
      setScores((prevScores) => ({ ...prevScores, ties: prevScores.ties + 1 }));
      setWinner(null);
      setGameOver(true);
    } 
    
    else {
      setTurnO(!turnO);
    }
  };


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    setTurnO(Math.random() < 0.5);
  };


  const resetScoresAndGame = () => {
    setScores({ x: 0, o: 0, ties: 0 });
    resetGame();
  };


  const checkWinner = (board) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    
    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };


  const handleNextRound = () => {
    resetGame();
  };


  const handleQuit = () => {
    resetScoresAndGame();
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="text-center">
        <Header turnO={turnO} onRestart={resetGame} />
        <Board board={board} onCellClick={handleCellClick} />
        <Footer scores={scores} />
        {gameOver && (
          <Overlay
            winner={winner}
            onQuit={handleQuit}
            onNextRound={handleNextRound}
            isTie={winner === null}
          />
        )}
      </div>
    </div>
  );
}

export default App;
