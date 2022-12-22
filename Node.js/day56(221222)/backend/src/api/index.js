const express = require("express");
const router = express.Router();
const mysql = require("./maria");

// /api/login POST 데이터를 전달 받는다.
router.post("/login", (req, res) => {
  const { userid, password } = req.body;

  mysql.selectUsers("", (result) => {
    console.log(result);
  });

  if (userid === "ssjj04022" && password == "12345") {
    res.send({ result: "success" });
  } else {
    res.send({ result: "fail" });
  }
});

// /api/regist POST 데이터를 전달 받는다.
router.post("/regist", (req, res) => {
  const { name, userid, password, year, month, day, gender } = req.body;
  if (name && userid && password && year && month && day && gender) {
    res.send({ result: "success" });
  } else {
    res.send({ result: "fail" });
  }
});

// /api/identify GET 데이터를 전달 받는다.
router.get("/identify", (req, res) => {
  const { email } = req.query;
  if (email == "ssjj04022@naver.com") {
    res.send({ result: "ssjj04022" });
  } else if (email === "aaa@naver.com") {
    res.send({ result: "aaa" });
  } else if (email === "bbb@naver.com") {
    res.send({ result: "bbb" });
  } else {
    res.send({ result: "fail", text: "계정이 존재하지 않습니다." });
  }
});

// /api/user DELETE 데이터를 전달 받는다.
router.delete("/user", (req, res) => {
  const { email, userid } = req.query;

  if (email == "ssjj04022@naver.com" && userid == "ssjj04022") {
    res.send({ result: "success" });
  } else {
    res.send({ result: "fail" });
  }
});

// 데이터를 배열로 안에 값은 JSON 데이터로
const array = [
  {
    no: 1,
    title: "에듀윌",
    subtitle: "🚨기간한정 특별 이벤트🚨 초시생 필수템, 만화입문서 무료배포!",
    tags: "#합격자수1위 #에듀윌 #공인중개사",
    url: "EDUWILL.NET",
    text: "입문교재 선착순 무료신청☞ 합격자 수 1위 에듀윌 공인중개사",
    image: "/images/game-1.jpg",
    likecount: 1,
  },
  {
    no: 2,
    title: "코리아아이티",
    subtitle: "🚨기간한정 특별 이벤트🚨 프론트엔드 5개월차 수업!",
    tags: "#합격자수1위 #에듀윌 #공인중개사",
    url: "KOREATIT.NET",
    text: "녹화 동영상 무료 제공! ☞ 합격자 수 1위 에듀윌 공인중개사",
    image: "/images/game-2.jpg",
    likecount: 2,
  },
  {
    no: 3,
    title: "코리아아이티aaaa",
    subtitle: "🚨기간한정 특별 이벤트🚨 aaaaaaa!",
    tags: "#합격자수1위 #에듀윌 #공인중개사",
    url: "KOREATIT.NET",
    text: "aaaaaaaaaaaaa! ☞ 합격자 수 1위 에듀윌 공인중개사",
    image: "/images/game-3.jpg",
    likecount: 3,
  },
];

router.get("/home", (req, res) => {
  res.send({ result: array });
});

router.put("/home/like", (req, res) => {
  const { no, like } = req.body;

  const data = array.find((item) => item.no === no);
  data.likecount = data.likecount + like;

  console.log(array);

  res.send({ result: "success" });
});
module.exports = router;
