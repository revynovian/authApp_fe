import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';

// change dark/light theme
import { ThemeContext } from './context/ThemeContext';
import ChangeTheme from './context/ThemeContext';

// react router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  const { theme, toogleTheme } = ChangeTheme();

  // const urlUser = "http://localhost:5000/auth/login/success"
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  // console.log(user)

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <BrowserRouter>
        <div className="App" id={theme}>
          <Navbar isUser={user}/>
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/home"/> : <Login/> }></Route>
            <Route path="/home" element={user ? <Home/> : <Navigate to="/login"/> }></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Navigate to="/login"/>}></Route> 
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
