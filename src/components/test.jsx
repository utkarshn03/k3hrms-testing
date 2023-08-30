import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function Test() {

  
  const [redirect, setRedirect] = useState(false);
  const { setUser, user } = useContext(UserContext);

  async function logout() {
		await axios.post("/api/user/logout");
		setRedirect("/");
		setUser(null);
	}

  return (
        <>
        {/* <p className="text-xl">{user.email}</p> */}
        <button onClick={logout} className='text-black'>Logout</button>
        
        </>
  );
}

export default Test;