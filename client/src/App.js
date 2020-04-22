import React from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Navbar from "./Components/Navbar";

const App = () =>{

   
    return(
        <div className="App">
            <Navbar />
           <Clock />
        </div>
    );
}

export default App;
