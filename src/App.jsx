import './App.css';
import {useState} from 'react';
import ChessBoard from './components/ChessBoard/ChessBoard';
function App() {
  const [fen,setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  const [currentFen,setCurrentFen]=useState(fen);
  const [currenteval]=useState(50);
  const handleLoadFen=()=>{
    setFen(currentFen);
  }
  return (
    <div className="app">
      <div className="section1">
        <ChessBoard size={500} fen={fen} />
      </div>
      <div className="section2">
        <div className="section2__text">
          <textarea value={currentFen} placeholder='Enter your FEN!' onChange={e=>setCurrentFen(e.target.value)}></textarea>
        </div>
        <div className="section2__button">
          <button className='load-button' onClick={handleLoadFen}>Load</button>
          <button className='load-button' >Analyse</button>
        </div>
        <div className="section2__analysis">
          <div className="section2__leftBar" style={{width:`${currenteval}%`}}></div>
          <div className="section2__rightBar"></div>          
        </div>
      </div>
    </div>
  );
}

export default App;
