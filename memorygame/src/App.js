import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  const images = [
        'nature1.jpg',
        'nature3.jpg',
        'nature4.jpg'     
       ]
  return (
    <div className="App">  
    <Board row={3} column={2} images={images}/>
    </div>
  );
}

export default App;
