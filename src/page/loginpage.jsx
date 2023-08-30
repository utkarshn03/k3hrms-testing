import React from 'react';
import Login from "../components/login.jsx";

import bgi from "../assets/bg.svg";

const loginpage = () => {

  return (
    <div
    className="App bg-cover"
    style={{ backgroundImage: `url(${bgi})`, backgroundRepeat: "repeat" }}
    >
        <Login/>        
    </div>
  )
}

export default loginpage