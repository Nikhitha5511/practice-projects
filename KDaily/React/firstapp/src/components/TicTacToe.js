import React from "react";
import { useState } from "react";
import GameLogic from "./gameLogic";

const TicTacToe = () => {
  const { board, handleClick, getStatusMessage, resetGame } = GameLogic();
  return (
    <div className="container flex flex-col items-center mt-12">
      <h1 className="title text-4xl mb-6">Tic Tac Toe</h1>
      <div className="mb-4">
        <div className="status text-xl mb-2">{getStatusMessage()}</div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    
      <div className="board grid grid-cols-3">
        {board.map((board, index) => {
          return (
            <button
              className="cell w-24 h-24 text-2xl flex items-center justify-center border border-gray-500 cursor-pointer"
              onClick={()=>{handleClick(index)}}
              key={index}
              disabled={board!==null}
            >
              {board}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
