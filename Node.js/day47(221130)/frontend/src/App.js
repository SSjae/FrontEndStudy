import {Route, Routes, Link, BrowserRouter} from "react-router-dom"

import Login from "./view/Login";
import Home from "./view/Home";
import Regist from "./view/Regist";
import Identify from "./view/Identify";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">로그인</Link>
        <Link to="/home">홈</Link>
        <Link to="/regist">사용자 등록</Link>
        <Link to="/identify">사용자 찾기</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/regist" element={<Regist/>}/>
          <Route path="/identify" element={<Identify/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;