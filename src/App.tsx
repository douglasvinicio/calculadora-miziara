import './App.css'
import {useState} from 'react'

function App() {  

  const materiais = ["Madeira", "Pedra Marmore"]; 
  const formula = ["1- Formula - X / Servico", "2- Formula - X / Servico", "3- Formula - X / Servico"];   
  const [materialSelected, setMaterialSelected] = useState(materiais[0])
  const [formulaSelected, setFormulaSelected] = useState(formula[0])
  return (
    <div className="App">
      <h2 className="text-center pt-5 pb-4">Calculadora X</h2>
      
      <form className="text-center">
      <label className="h5">Formula:</label>
      <select className="m-2 mb-3" 
       value={formulaSelected} 
       onChange={e => setFormulaSelected(e.target.value)}>
        {formula.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <br />
      <label className="h5">Material:</label>
      <select className="m-2 mb-3" 
       value={materialSelected} 
       onChange={e => setMaterialSelected(e.target.value)}>
        {materiais.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      
    </form>
    </div>
  )
}

export default App
