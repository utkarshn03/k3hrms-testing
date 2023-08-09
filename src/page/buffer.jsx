import React from 'react';
import Verification from '../components/verification';
import Test from '../components/test';
// import { useNavigate } from 'react-router-dom';


const Buffer = () => {

    const verified = false;
    // const navigate = useNavigate();
    // navigate("/test")
  return (
    <div>
        { verified === true?
            <Verification/>
        :
            <Test/>   
        }
    </div>
  )
}

export default Buffer