import { useState } from 'react'
import './App.css'

function App() {
  const [risultato, setRisultato] = useState(0);
  const [a, setA] = useState();
  const [b, setB] = useState();

  return (
    <>
      <div className='container'>
        <div className='first-number'><input type="number" placeholder='primo numero' value={a} onChange={(e) => setA(e.target.value)}/></div>
        <div className='second-number'><input type="number" placeholder='secondo numero' value={b} onChange={(e) => setB(e.target.value)}/></div>
        <div className="operations">
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : !!a + !!b)}>+</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : a - b)}>-</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) ? 'Errore' : a * b)}>*</button>
          <button onClick={() => setRisultato(isNaN(a) || isNaN(b) || b !== 0 ? 'Errore' : a / b)}>/</button>
        </div>
        <div className="risultato">{risultato}</div>
      </div>
    </>
  )
}

export default App
