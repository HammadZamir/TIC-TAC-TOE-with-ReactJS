import React from 'react';
// import { useEffect} from 'react';



function Overlay({ winner, onQuit, onNextRound, isTie }) {


// useEffect(()=>{
//   alert(`${winner} takes the round`);
// } , [])



  // if (winner === null && !isTie) {
  //   return null; // Don't display the overlay if no winner and not a tie
  // }

  return (
    <div className="overlay fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-700 w-full text-white p-6 rounded-lg shadow-lg text-center mx-auto">
        {!isTie && <h2 className="you-won text-xs mb-5 font-bold text-cyan-500">Congratulations!</h2>}
        <p className="take-round mb-5 text-2xl font-bold">
          {isTie ? "It's a Tie!" : `"${winner}" Takes the Round!`}
        </p>
        <div className="flex justify-center  mt-4">
          <button
            onClick={onQuit}
            className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4   mx-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Quit
          </button>
          <button
            onClick={onNextRound}
            className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-4   mx-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
