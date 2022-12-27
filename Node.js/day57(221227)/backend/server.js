const express = require("express");
const path = require("path");
const app = express();

// 메인 페이지 접속시 html 응답하는 방법

// 미들웨어 : html, css, js, img 파일들이 담긴 곳 명시
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Body로 파라미터를 받기 위한 설정
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// 미들웨어 : 요청이 와서 응답을 하기 전에 들르는 곳
// logger로 req에 reqtime을 넣어줌
// 요청이 들어오면 log를 찍게됨
const moment = require("moment");
const logger = (req, res, next) => {
  req.reqtime = moment().format("YYYY-MM-DD HH:mm:ss.sss");
  console.log(`============> [${req.reqtime}][${req.method}${req.url} call!]`);

  // 콘솔창에 색상을 변경해주는 이스케이브 문자를 추가해보자(마지막엔 원래 상태로)
  console.log(
    "\x1b[32m%s",
    `===========> [${req.reqtime}][${req.method}]${req.url} call!`,
    "\x1b[37m"
  );

  // req.query나 req.body로 데이터가 있을 때 log로 출력해줌
  req.query &&
    Object.keys(req.query).length &&
    console.log(`    ====> request query = `, req.query);
  req.body &&
    Object.keys(req.body).length &&
    console.log(`     ====> request body = `, req.body);

  // 미들웨어를 거치고 그 다음 실제 api로 호출하기 위해 반드시 있어야 됨
  next();
};

app.use(logger);

const api = require("./src/api/index");
app.use("/api", api);

const http = require("http").createServer(app);
http.listen(8080, () => {
  console.log("server listen start : 8080");
});
