import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Aos from "aos";
import Router from "./Components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [size, setsize] = useState(window.innerWidth);
  const setWindowDimensions = () => {
    setsize(window.innerWidth);
  };
  useEffect(() => {
    Aos.init();

     window.addEventListener("resize", setWindowDimensions);
     return () => {
       window.removeEventListener("resize", setWindowDimensions);
    };
    
  }, []);
  return (
    <>
      {size > 1200 ? (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h1>your screen is too short</h1>
        </div>
      )}
    </>
  );
}

export default App;
