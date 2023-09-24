import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Authenticator from "./Authprovider";
import Login from "./page/loginpage.jsx";
import Kiitp from "./kiitp/kiitp.jsx";
import Hospitalityp from "./hospitalityp/hospitalityp.jsx";
import Kimsp from "./kimsp/kimsp";
import Kissp from "./kissp/kissp.jsx";
import Templep from "./templep/templep.jsx";
import Test from "./components/test.jsx";
import Firstauth from "./components/firstauth.jsx";
import Header from "./components/header"
import Buffer from "./page/buffer.jsx";
import Verification from "./components/verification";
import PermissionDenied from "./components/Permissiondenied";
import Newuser from "./admin/newuser";
import ProtectedRoutes from "./components/protectedroutes";
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
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
          <Route path="/" element={<Login title="Login" />} />
          </Routes>

          <Routes>
          <Route path="/k3/kiit" element={<Kiitp title="Kiit" />} />
						

          <Route path="/k3/kims" element={<Kimsp title="kims" />} />
          <Route path="/k3/kiss" element={<Kissp title="kiss" />} />
          
          <Route path="/k3/temple" element={<Templep title="temple" />} />
          <Route path="/k3/hospitality" element={<Hospitalityp title="hospitality" />} />
            	<Route path="/k3/kims" element={<Kimsp title="kims" />} />
              <Route path="/k3/admin/newuser" element={<Test title="kims" />} />
              <Route path="/test" element={<Test title="Test" />} />
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
