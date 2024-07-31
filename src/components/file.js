// import React from 'react';

// function Overlay({ winner, onQuit, onNextRound, isTie }) {
//   if (winner === null && !isTie) {
//     return null; // Don't display the overlay if no winner and not a tie
//   }

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-gray-700 w-full text-white p-6 rounded-lg shadow-lg text-center mx-auto">
//         {!isTie && <h2 className="you-won text-xs mb-5 font-bold text-cyan-500">Congratulations!</h2>}
//         <p className="text-lg mb-8"> {isTie ? "It's a Tie!" : `${winner} Takes the Round!`} </p>
//         <div className="flex justify-center  mt-4">
//           <button onClick={onQuit} className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4 mx-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
//             Quit
//           </button>
//           <button onClick={onNextRound} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
//             Next Round
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Overlay;












// {gameOver && (
//     <Overlay
//       winner={winner}
//       onQuit={handleQuit}
//       onNextRound={handleNextRound}
//       isTie={winner === null}
//     />
//   )}




















// import React, { useState } from 'react';
// import Header from './components/Header';
// import Board from './components/Board';
// import Footer from './components/Footer';
// import Overlay from './components/Overlay';


// function App() {
//   const [turnO, setTurnO] = useState(Math.random() < 0.5);
//   const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [gameOver, setGameOver] = useState(false);
//   const [winner, setWinner] = useState(null);

//   const handleCellClick = (index) => {
//     if (board[index] || gameOver) return;
//     // console.log(board);
//     const newBoard = [...board];
//     newBoard[index] = turnO ? 'O' : 'X';
//     setBoard(newBoard);
//     // console.log(board);


//     const winner = checkWinner(newBoard);
//     if (winner) {
//       setScores((prevScores) => ({
//         ...prevScores,
//         [winner.toLowerCase()]: prevScores[winner.toLowerCase()] + 1,
//       }));
//       setWinner(winner);
//       setGameOver(true);
//     } else if (newBoard.every((cell) => cell !== null)) {
//       setScores((prevScores) => ({ ...prevScores, ties: prevScores.ties + 1 }));
//       setWinner(null);
//       setGameOver(true);
//     } else {
//       setTurnO(!turnO);
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setGameOver(false);
//     setWinner(null);
//     setTurnO(Math.random() < 0.5);
//   };

//   const resetScoresAndGame = () => {
//     setScores({ x: 0, o: 0, ties: 0 });
//     resetGame();
//   };

//   const checkWinner = (board) => {
//     const winningConditions = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let condition of winningConditions) {
//       const [a, b, c] = condition;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
//       // console.log(board[a]);
//     }

//     return null;
//   };

//   const handleNextRound = () => {
//     resetGame();
//   };

//   const handleQuit = () => {
//     resetScoresAndGame();
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800">
//       <div className="text-center">
//         <Header turnO={turnO} onRestart={resetGame} />
//         <Board board={board} onCellClick={handleCellClick} />
//         <Footer scores={scores} />
       
//       </div>
//     </div>
//   );
// }

// export default App;