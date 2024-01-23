import "./App.css";
import Home from "./home";
import All from "./all";
import Single from "./single";
import About from "./about";
import Contact from "./contact";
import Login from "./login";
import Register from "./register";
import Cart from "./cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <All></All> */}
      {/* <Single></Single> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <Cart></Cart> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/All" element={<All></All>}></Route>
          <Route path="/Single" element={<Single></Single>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
