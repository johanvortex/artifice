import logo from './logo.svg';
import './App.css';
import Start from './components/start';
import '../src/global.css';
import trans from './assets/img/transver.png';
import Redes from './components/redes';
import Nosotros from './components/nosotros'; 

function App() {
  return (
    <div className="App">
    <Start/>
    <img className='trans' src={trans} alt="Imagen 2" />
    <Redes/>
    <img className='trans' src={trans} alt="Imagen 2" />
    <Nosotros/>
  </div>
);
}

export default App;
