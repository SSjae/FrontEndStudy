const express = require("express");
const router = express.Router();

// /api/login POST 데이터를 전달 받는다.
router.post("/login", (req, res) => {
    console.log("====================> [POST]/api/login call!!!");

    console.log(req.body);

    const {userid, password} = req.body
    if(userid === "ssjj04022" && password == "12345") {
        res.send({result: "success"});
    } else {
        res.send({result: "fail"})
    }

})

// /api/regist POST 데이터를 전달 받는다.
router.post("/regist", (req, res) => {
    console.log("====================> [POST]/api/regist call!!!")

    console.log(req.body);

    const {name, userid, password, year, month, day, gender} = req.body;
    if(name && userid && password && year && month && day && gender) {
        res.send({result: "success"});
    } else {
        res.send({result: "fail"})
    }
})

// /api/identify GET 데이터를 전달 받는다.
router.get("/identify", (req, res) => {
    console.log("====================> [GET]/api/identify call!!!")

    console.log(req.query);

    const {email} = req.query;
    if(email == "ssjj04022@naver.com") {
        res.send({result: "ssjj04022"});
    } else if(email === "aaa@naver.com") {
        res.send({result: "aaa"});
    } else if(email === "bbb@naver.com") {
        res.send({result: "bbb"});
    } else {
        res.send({result: "fail", text:"계정이 존재하지 않습니다."})
    }
})

// /api/user DELETE 데이터를 전달 받는다.
router.delete("/user", (req, res) => {
    console.log("====================> [DELETE]/api/user call!!!")
    console.log(req.query);

    const {email, userid} = req.query;

    if(email == "ssjj04022@naver.com" && userid == "ssjj04022") {
        res.send({result: "success"});
    } else {
        res.send({result: "fail"});
    }
})
module.exports = router