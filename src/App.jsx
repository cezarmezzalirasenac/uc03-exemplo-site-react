import './App.css'
import { Cards } from './components/Cards'
import { NavBar } from './components/NavBar'

function App() {


  return (
    <>
      <div id="content">
      <NavBar />
        <div id="results">
          <h2>Tempo de Jogo</h2>
          <h4 id="timer">00:00</h4>
          <h2>Pontos</h2>
          <h4 id="points">0</h4>
        </div>
        <Cards />
        <div id="controls">
          <button id="start-btn">Iniciar</button>
          <button id="stop-btn">Zerar</button>
        </div>
      </div>

    </>
  )
}

export default App
