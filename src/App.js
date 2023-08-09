import "./App.css";
import bgi from "./assets/bg.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./page/loginpage.jsx";
import Kiitp from "./kiitp/kiitp.jsx";
import Test from "./components/test.jsx";
import Firstauth from "./components/firstauth.jsx";
import Verification from "./page/buffer.jsx";
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
			style={{ backgroundImage: `url(${bgi})`, backgroundRepeat: "repeat" }}>
			<BrowserRouter>
				<UserContextProvider>
					<Routes>
						<Route path="/k3/kiit" element={<Kiitp title="Kiit" />} />
						<Route path="/" element={<Login title="Login" />} />


            			<Route path="/test" element={<Test title="Test" />} />
						<Route path="/firstauth" element={<Firstauth title="Authio" />} />
						<Route path="/auth" element={<Verification title="Auth" />} />
						
					</Routes>
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;