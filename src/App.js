import "./App.css";
import Start from "./components/start";
import "../src/global.css";
import trans from "./assets/img/transver.png";
import Redes from "./components/redes";
import Nosotros from "./components/nosotros";
import Galeria from "./components/congaleria.js/galeria";
import Blog from "./components/conblog/blogini";
import Contactanos from "./components/contactanos";
import Logo from "./assets/img/Logo.png";
import { useEffect, useRef } from "react";

function App() {
  const scrollTargetRef = useRef(null);
  const scrollTargetRef1 = useRef(null);
  const scrollTargetRef2 = useRef(null);
  const scrollTargetRef3 = useRef(null);
  const scrollTargetRef4 = useRef(null);

  const handleScrollToTarget = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTarget1 = () => {
    if (scrollTargetRef1.current) {
      scrollTargetRef1.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTarget2 = () => {
    if (scrollTargetRef2.current) {
      scrollTargetRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTarget3 = () => {
    if (scrollTargetRef3.current) {
      scrollTargetRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTarget4 = () => {
    if (scrollTargetRef4.current) {
      scrollTargetRef4.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.scroll(0,0)
  });

  return (
    <div className="App">
      <div className="app-header">
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "120px", maxHeight: "35px" }}
          />
        </div>
        <nav className="nav-right">
          <a onClick={handleScrollToTarget} style={{cursor:"pointer"}}>Inicio</a>
          <a onClick={handleScrollToTarget1} style={{cursor:"pointer"}}>Nosotros</a>
          <a onClick={handleScrollToTarget2} style={{cursor:"pointer"}}>Redes</a>
          <a onClick={handleScrollToTarget3} style={{cursor:"pointer"}}>Galerias</a>
          <a onClick={handleScrollToTarget4} style={{cursor:"pointer"}}>Contacto</a>
        </nav>
      </div>
      <div ref={scrollTargetRef}>
        <Start />
      </div>
      <img className="trans" src={trans} alt="Imagen 2" />
      <div ref={scrollTargetRef3}>
        <Galeria />
      </div>
      <img className="trans" src={trans} alt="Imagen 2" />
      <div ref={scrollTargetRef2}>
        <Redes />
      </div>
      <img className="trans" src={trans} alt="Imagen 2" />
      <div ref={scrollTargetRef1}>
        <Nosotros />
      </div>
      <img className="trans" src={trans} alt="Imagen 2" />
      <div ref={scrollTargetRef4}>
        <Contactanos />
      </div>
      <img className="trans" src={trans} alt="Imagen 2" />
      {/* <Blog /> */}
    </div>
  );
}

export default App;
