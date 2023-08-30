import React, { useContext } from "react"
import { UserContext } from "../UserContext";

import {Navigate, Outlet} from "react-router-dom"

//protected Route state

const ProtectedRouteType = {
    
	roleRequired : 0,
}

const ProtectedRoutes = (props= ProtectedRouteType) => {
    const { setUser, user } = useContext(UserContext);
    const auth = true;
    const role = user.role;

	//if the role required is there or not
	if (props.roleRequired) {
		return auth ? (
			props.roleRequired === role ? (
				<Outlet />
			) : (
				<Navigate to="/denied" />
                
			)
		) : (
			<Navigate to="/login" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/login" />
	}
}

export default ProtectedRoutes