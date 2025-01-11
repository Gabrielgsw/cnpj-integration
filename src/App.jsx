import { useEffect,useState } from 'react'
import './App.css'
import api from './services/api'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cnpj, setCnpj] = useState();
  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSearch = async () => {
    try {
      
      const response = await api.get(`/${inputValue}`); 
      setCnpj(response.data); // Armazena os dados retornados
    } catch (err) {
      console.error("Erro"+err) 
    }
  };

  

  return (
    <div className='app'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite o CNPJ: "
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
        Buscar
      </button>

      {cnpj && (
        <div style={{ marginTop: "20px" }}>
          <h3>Nome:{cnpj?.nome}</h3>
          <h3>Nome fantasia:{cnpj?.fantasia}</h3>
        </div>
      )}
    </div>
    
  )
}

export default App
