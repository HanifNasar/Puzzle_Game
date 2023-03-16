import React, { useState, useEffect } from 'react';
import './PuzzleGame.css'

const PuzzleGame = () => {
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(15);
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
const deleteAccount=()=>{ 
    localStorage.clear()
    window.location.reload()
}
  useEffect(() => {
    shuffleTiles();
  }, []);

  const shuffleTiles = () => {
    const numbers = Array.from(Array(16), (_, i) => i);
    const shuffled = numbers.sort(() => Math.random() - 0.5);
    setTiles(shuffled);
    setEmptyIndex(shuffled.indexOf(15));
  };

  const moveTile = (index) => {
    if (isMovable(index)) {
      const newTiles = [...tiles];
      const empty = newTiles[emptyIndex];
      newTiles[emptyIndex] = newTiles[index];
      newTiles[index] = empty;
      setTiles(newTiles);
      setEmptyIndex(index);
    }
  };

  const isMovable = (index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;
    const rowDiff = Math.abs(row - emptyRow);
    const colDiff = Math.abs(col - emptyCol);
    return (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0);
  };
 return (
    <div className="game">
     
      <h1>Puzzle Game</h1>
      <button onClick={logout} className="logout">LogOut</button>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === 15 ? 'empty' : ''} ${isMovable(index) ? 'active' : ''}`}
            onClick={() => moveTile(index)}
          >
            {tile !== 15 ? tile : ''}
          </div>
        ))}
      </div>
       <button className="button" onClick={shuffleTiles}>Shuffle</button>
       
       <button onClick={deleteAccount} className="delete">Delete</button>
       
            
    </div>
    
  );
};

export default PuzzleGame;

