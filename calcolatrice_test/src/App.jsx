import { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [risultato, setRisultato] = useState(0);
  const [a, setA] = useState();
  const [b, setB] = useState();

  return (
    <>
      <div className='container-fluid'>
        <h3>Calcolatrice</h3>
        <div className='first-number'><input type="number" placeholder='primo numero' value={a} onChange={(e) => setA(e.target.value)}/></div>
        <div className='second-number'><input type="number" placeholder='secondo numero' value={b} onChange={(e) => setB(e.target.value)}/></div>
        <div className="operations">
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : parseInt(a) + parseInt(b))}>+</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : a - b)}>-</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : a * b)}>*</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) || b !== 0 ? 'Errore' : a / b)}>/</button>
        </div>
        <div className="risultato">Risultato: {risultato}</div>
      </div>
    </>
  )
}

export default App
