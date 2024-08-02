
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';
import Overlay from './components/Overlay';

function App() {
  const [turnO, setTurnO] = useState(Math.random() < 0.5); // Player is 'O', CPU is 'X'
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);


  // useEffect(() => {
  //   alert("Hey, welcome to my Page")
  // }, []);


  // Function to handle the player's move
  const handleCellClick = (index) => {
    if (board[index] || gameOver || !turnO) { 
      return;
    }
    // console.log(!turnO);

    const newBoard = [...board];
    newBoard[index] = 'O'; 
    setBoard(newBoard);

    const winner = checkWinner(newBoard);

    if (winner) {
      setScores((prevScores) => ({
        ...prevScores,
        [winner.toLowerCase()]: prevScores[winner.toLowerCase()] + 1,
      }));
      setWinner(winner);
      setGameOver(true);
    } else if (newBoard.every((cell) => cell !== null)) {
      setScores((prevScores) => ({ ...prevScores, ties: prevScores.ties + 1 }));
      setWinner(null);
      setGameOver(true);
    } else {
      setTurnO(false); 
    }
  };

    // [null , x , x , null , o , null , x , o , null]
      //  0  null null  3    null  5    null null 8
        // [0,3,5,8]

 



  // useEffect to handle CPU's move automatically
  useEffect(() => {
    if (!turnO && !gameOver) { 


      const cpuMove = (board) => {
        const emptyIndexes = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
        const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        return randomIndex;
      };
 


      setTimeout(()=>{

        const index = cpuMove(board);
        
          const newBoard = [...board];
          newBoard[index] = 'X'; // CPU's move
          setBoard(newBoard);

          const winner = checkWinner(newBoard);
          if (winner) {
            setScores((prevScores) => ({
              ...prevScores,
              [winner.toLowerCase()]: prevScores[winner.toLowerCase()] + 1,
            }));
            setWinner(winner);
            setGameOver(true);
          } else if (newBoard.every((cell) => cell !== null)) {
            setScores((prevScores) => ({ ...prevScores, ties: prevScores.ties + 1 }));
            setWinner(null);
            setGameOver(true);
          } else {
            setTurnO(true); // Switch back to player's turn
          }

      } , 1000)

    }
  } , [board]);



  // Function to reset the game board
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    setTurnO(Math.random() < 0.5);
  };

  // Function to reset both the game and scores
  const resetScoresAndGame = () => {
    setScores({ x: 0, o: 0, ties: 0 });
    resetGame();
  };

  // Function to check the winner
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

  // Function to start the next round
  const handleNextRound = () => {
    resetGame();
  };

  // Function to quit the game and reset scores
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























// import React, { useEffect, useState } from 'react';
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

  

// // useEffect(()=> {
// //   alert("Hey welcome to my Page")
// // } ,[])



//   const handleCellClick = (index) => {
//     if (board[index] || gameOver) {
//       return;
//     }

//     const newBoard = [...board]; 
//     // const newBoard = board;                      
//     newBoard[index] = turnO ? 'O' : 'X';
//     setBoard(newBoard);                              // ?

//     // console.log("first : ",newBoard )
//     // console.log("third : ", board )

//     const winner = checkWinner(newBoard);            // ?

//     if (winner) {
//       setScores((prevScores) => ({
//         ...prevScores, [winner.toLowerCase()]: prevScores[winner.toLowerCase()] + 1,
//       }));
//       setWinner(winner);
//       setGameOver(true);
//     } 

//     else if (newBoard.every((cell) => cell !== null)) {
//       setScores((prevScores) => ({ ...prevScores, ties: prevScores.ties + 1 }));
//       setWinner(null);
//       setGameOver(true);
//     } 
    
//     else {
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
//       console.log("second : " , board)
//       const [a, b, c] = condition;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
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
//         {gameOver && (
//           <Overlay
//             winner={winner}
//             onQuit={handleQuit}
//             onNextRound={handleNextRound}
//             isTie={winner === null}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

























































