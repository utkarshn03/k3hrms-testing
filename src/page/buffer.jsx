import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import { UserContext } from '../UserContext';

const Buffer = () => {

  const navigate = useNavigate();
  // var flag=1;
     
	const { user, setUser } = useContext(UserContext);    
  const un = user.username;
  const unv = user.verified;

  useEffect(() => {

    if(unv){
      navigate("/k3/kiit");
    } else {
        
    const res = axios.post("/api/auth/generate_otp", { un });
    if(res.status === 200) navigate("/verification");
    }

  }, []);

  

  return(
    <>
      Please wait we are authenticating 
    </>
  )
  
}


export default Buffer