
import './App.css';
import Start from './components/start';
import '../src/global.css';
import trans from './assets/img/transver.png';
import Redes from './components/redes';
import Nosotros from './components/nosotros'; 
import Contactanos from './components/contactanos';
import Galeria from './components/congaleria.js/galeria';
import Blog from './components/conblog/blogini';


function App() {
  return (
    <div className="App">
    <Start/>
    <img className='trans' src={trans} alt="Imagen 2" />
    <Galeria/>
    <img className='trans' src={trans} alt="Imagen 2" />
    <Redes/>
    <img className='trans' src={trans} alt="Imagen 2" />
    <Nosotros/>
    <img className='trans' src={trans} alt="Imagen 2" />

    <Contactanos/>
    <img className='trans' src={trans} alt="Imagen 2" />
    {/* <Blog/> */}
  </div>
);
}

export default App;
