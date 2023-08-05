import "./App.css";
import bgi from "./assets/bg.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./page/loginpage.jsx";
import Kiitp from "./kiitp/kiitp.jsx";
import { UserContextProvider } from "./UserContext";

const baseURL =
	window.location.hostname === "frontend.unknownclub.me"
		? "https://backend.unknownclub.me"
		: "http://localhost:5000";
// console.log(baseURL);

axios.defaults.baseURL = baseURL;

axios.defaults.withCredentials = true;

function App() {
	return (
		<div
			className="App bg-cover"
			style={{ backgroundImage: `url(${bgi})`, backgroundRepeat: "no-repeat" }}>
			<BrowserRouter>
				<UserContextProvider>
					<Routes>
						<Route path="/k3/kiit" element={<Kiitp title="Kiit" />} />
						<Route path="/" element={<Login title="Login" />} />
					</Routes>
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
