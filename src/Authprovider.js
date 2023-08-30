import React, { useContext, useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import { UserContext } from "./UserContext";


function Authprovider() {

  const navigate = useNavigate();
  
  const [redirect, setRedirect] = useState(true);

	const { user, setUser } = useContext(UserContext);

  if(!user){
    setRedirect(false);
  }

  useEffect(() => {
    if (!redirect) {
      setTimeout(() => navigate("/"), 7000);
    }  
  }, []);

  
  return(
    <div>
      Authenticating
    </div>
  )
}

export default Authprovider;