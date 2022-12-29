const express = require("express");
const router = express.Router();
const mysql = require("./maria");

// /api/login POST 데이터를 전달 받는다.
router.post("/login", async (req, res) => {
  const { userid, password } = req.body;

  const results = await mysql.findUser(req.body);
  console.log(results);

  if (results && results.length > 0) {
    res.send({ result: "success" });
  } else {
    res.send({ result: "fail" });
  }
});

// /api/regist POST 데이터를 전달 받는다.
router.post("/regist", async (req, res) => {

  // 사용자 아이디 중복 체크
  const user = await mysql.checkUser(req.body);
  console.log(user);

  // 중복되었으면 해당하는 코드를 보내자
  if(user && user.length > 0) {
    res.send({result: "dup-userid"});
  } else {
    // 중복되지 않은 경우만 삽입한다.
    const result = await mysql.insertUser(req.body);
    console.log(result);
  
    if (result) {
      res.send({ result: "success" });
    } else {
      res.send({ result: "fail" });
    }
  }

});

// /api/identify GET 데이터를 전달 받는다.
router.get("/identify", async (req, res) => {
  const { email } = req.query;

  const user = await mysql.findAccountid(req.query);
  console.log(user);

  if (user) {
    res.send({ result: user.userId });
  } else {
    res.send({ result: "fail", text: "계정이 존재하지 않습니다." });
  }
});

// /api/user DELETE 데이터를 전달 받는다.
router.delete("/user", async (req, res) => {
  const { email, userid } = req.query;

  const result = await mysql.deleteUser(req.query);
  console.log(result);

  if (result) {
    res.send({ result: "success" });
  } else {
    res.send({ result: "fail" });
  }
});

// // 데이터를 배열로 안에 값은 JSON 데이터로
// const array = [
//   {
//     no: 1,
//     title: "에듀윌",
//     subtitle: "🚨기간한정 특별 이벤트🚨 초시생 필수템, 만화입문서 무료배포!",
//     tags: "#합격자수1위 #에듀윌 #공인중개사",
//     url: "EDUWILL.NET",
//     text: "입문교재 선착순 무료신청☞ 합격자 수 1위 에듀윌 공인중개사",
//     image: "/images/game-1.jpg",
//     likecount: 1,
//   },
//   {
//     no: 2,
//     title: "코리아아이티",
//     subtitle: "🚨기간한정 특별 이벤트🚨 프론트엔드 5개월차 수업!",
//     tags: "#합격자수1위 #에듀윌 #공인중개사",
//     url: "KOREATIT.NET",
//     text: "녹화 동영상 무료 제공! ☞ 합격자 수 1위 에듀윌 공인중개사",
//     image: "/images/game-2.jpg",
//     likecount: 2,
//   },
//   {
//     no: 3,
//     title: "코리아아이티aaaa",
//     subtitle: "🚨기간한정 특별 이벤트🚨 aaaaaaa!",
//     tags: "#합격자수1위 #에듀윌 #공인중개사",
//     url: "KOREATIT.NET",
//     text: "aaaaaaaaaaaaa! ☞ 합격자 수 1위 에듀윌 공인중개사",
//     image: "/images/game-3.jpg",
//     likecount: 3,
//   },
// ];

router.get("/home", async (req, res) => {
  console.log(req.query);

  const array = await mysql.selectHome();
  console.log(array);

  res.send({ result: array });
});

router.put("/home/like", async (req, res) => {
  // 1. likecount를 업데이트 하는 코드
  await mysql.updateLike(req.body);
  // 2. 업데이트한 데이터를 셀렉트(가져오는) 코드
  const item = await mysql.findHome(req.body);

  res.send({ result: item });
});

module.exports = router;
