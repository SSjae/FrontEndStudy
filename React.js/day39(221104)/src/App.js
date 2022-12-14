import {Route, BrowserRouter, Routes, Link} from "react-router-dom"
import Login from "./Login.jsx"
import Home from "./Home.jsx"
import Regist from "./Regist.jsx"
import Identify from "./Identify.jsx"

import Video from "./Video.jsx"
import People from "./People.jsx"

import './App.css';
import "./default.scss"
import "./react.scss"

function App() {
  return (
    <BrowserRouter>
      {/* 헤더에서 네비게이션(메뉴)를 설정해야 한다. */}
      <header>
        <Link className='' to="/">홈</Link>
        <Link className='' to="/login">로그인</Link>
        <Link className='' to="/regist">사용자 등록</Link>
        <Link className='' to="/identify">사용자 찾기</Link>
        <Link className='' to="/video">Video</Link>
        <Link className='' to="/people">People</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/regist" element={<Regist />}/>
          <Route path="/identify" element={<Identify />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/people" element={<People />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
