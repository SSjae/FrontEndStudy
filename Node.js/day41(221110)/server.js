// node_modules의 express 패키지를 가져온다.
const express = require("express");
const path = require("path");
const app = express();

// 메인 페이지 접속 시 html 응답하는 방법

// 미들웨어 : html, css, js, img 파일들이 담긴 곳
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    console.log(__dirname)
    
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// /hello 접속했을 때 hello.html을 보여주고 싶다.
app.get("/hello", (req, res) => {
    console.log(__dirname)

    res.sendFile(path.join(__dirname, "public/hello.html"))
})

app.get("/test", (req, res) => {
    console.log(__dirname)

    res.sendFile(path.join(__dirname, "public/test.html"))
})

const http = require("http").createServer(app);

// 변수인 port로 서버를 실행, 실행 후에 함수 실행
// express 서버를 실행할 때 필요한 포트 정의 및 실행시 callback 함수를 받는다.
app.listen(5050, () => {
    console.log("start! express server!");
})