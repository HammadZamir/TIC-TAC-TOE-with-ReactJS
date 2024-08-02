import React from 'react';

const Header = ({ turnO, onRestart }) => {
  return (
    <div className="text-white flex flex-row justify-between mb-5 p-4 rounded-lg">
      <div className="mb-4 text-xl font-bold text-gray-300">
        <span className="text-cyan-400"><i className="fa fa-times" aria-hidden="true"></i></span> 
        <span className="text-yellow-400 px-1">O</span>
      </div>

      <div className="turn-button border-none w-20 h-8 rounded-lg bg-gray-500 border-2 cursor-pointer flex items-center justify-center">
        <h2>{turnO ? 'O' : 'X'} Turn</h2>
      </div>

      <button onClick={onRestart} className="reset-button mb-4 cursor-pointer ">
        <i className="fa-solid fa-rotate"></i>
      </button>
    </div>
  );
}

export default Header;