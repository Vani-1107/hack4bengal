import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Books from "./components/Books";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Seller from "./components/Seller";
import Chat from "./components/Chat";
import Signup from "./pages/Signup";
// import midSection from './midSection.jpg';

import { Routes, Route, useActionData } from "react-router-dom";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);
  const url = "";
  async function fetchData() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setBooks(data);
  }
  return (
    <div className="m-0 p-0">
      <NavBar></NavBar>

      {/* <Books category={category} books={books}></Books> */}

      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        {/* <Route
          path="/signup"
          element={isLoggedIn ? <Seller /> : <Login />}
        ></Route> */}
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
