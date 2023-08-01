import './App.css';
import bgi from "./assets/bg.svg";

import { BrowserRouter, Route,Routes } from "react-router-dom";

import Login from "./page/loginpage.jsx";
import Kiitp from './kiitp/kiitp.jsx';


function App() {
  return (
    <div className="App bg-cover" style={{backgroundImage: `url(${bgi})`, backgroundRepeat: 'no-repeat'}}>
      <BrowserRouter>
       <Routes>
       <Route path='/k3/kiit' element={<Kiitp title="Kiit"/>}/>
       <Route path="/" element={<Login title="Login"/>}/>    
       
       </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
