import React from 'react';



function Overlay({ winner, onQuit, onNextRound, isTie }) {
  if (winner === null && !isTie) {
    return null; // Don't display the overlay if no winner and not a tie
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center w-full mx-4">
        {!isTie && <h2 className="text-xl mb-4 font-bold">Congratulations!</h2>}
        <p className="text-lg mb-8">
          {isTie ? "It's a Tie!" : `${winner} Takes the Round!`}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onQuit}
            className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-700"
          >
            Quit
          </button>
          <button
            onClick={onNextRound}
            className="px-4 py-2 bg-yellow-500 rounded-lg text-white hover:bg-yellow-600"
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
