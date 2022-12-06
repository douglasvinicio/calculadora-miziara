import './App.css'
import SelectList from './components/SelectList'
import {useState} from 'react'

interface Material {
  name: string;
  value: number;
}

function App() {    
  const materiais = ["Madeira", "Pedra Marmore"]; 
  const formula = ["1- Formula - X / Servico", "2- Formula - X / Servico", "3- Formula - X / Servico"];   
  const [materialSelected, setMaterialSelected] = useState(materiais[0])
  const [formulaSelected, setFormulaSelected] = useState(formula[0])

  return (
    <div className="App container">
      <h2 className="text-center pt-5 pb-4">Calculadora X</h2>
<SelectList />  
      <form className="text-center">
      <label className="h5">Formula:</label>
      <select className="form-select" aria-label="Default select example" 
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
