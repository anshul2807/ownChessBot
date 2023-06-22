import React from 'react';
import './ChessBoard.css'
function ChessBoard({ fen,size }) {
  let board = [];
  const createBoard = ()=>{
    for(let row=0;row<8;++row){
      for(let col=0;col<8;++col){
        const squareBoardColor = (row+col)%2===0 ? "white":"black";
        const key = `${row}-${col}-${row}`;
        board.push(<div key={`${key}`} className={`board-square ${squareBoardColor}`} style={{width:`${size/8}px`,height:`${size/8}px`}}/>);
      }
    }
  }
  const decodeFEN = () => {
    const rows = fen.split(" ")[0].split("/");
    let count=0;
    for (let row = 0; row < rows.length; row++) {
      const squares = rows[row].split("");
      for (let col = 0; col < squares.length; col++) {
        const square = squares[col];
        if (!isNaN(square)) {
          count += parseInt(square);
        } else {
          const key = `${row}-${col}`;
          const piece = getPieceCode(square);
          let CurrentclassName = board[count].props.className;
          CurrentclassName += ` piece ${piece}`
          board[count++] = <div draggable key={`${key}`} className={`${CurrentclassName}`} style={{width:`${size/8}px`,height:`${size/8}px`}}/>
        }
        
      }
    }
  }
  createBoard();
  decodeFEN();
  return (
    <div className="chess-board" style={{width:`${size}px`,height:`${size}px`}}>
      {board}
    </div>
  );
}

function getPieceCode(piece) {
  switch (piece) {
    case "p": return "black-pawn";
    case "r": return "black-rook";
    case "n": return "black-knight";
    case "b": return "black-bishop";
    case "q": return "black-queen";
    case "k": return "black-king";
    case "P": return "white-pawn";
    case "R": return "white-rook";
    case "N": return "white-knight";
    case "B": return "white-bishop";
    case "Q": return "white-queen";
    case "K": return "white-king";
    default: return "";
  }
}

export default ChessBoard;
