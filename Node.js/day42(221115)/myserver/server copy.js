// node_modules의 express 패키지를 가져온다.
var express = require("express");

// app이라는 변수에 express 함수의 값을 저장한다.
var app = express();

// 환경변수(process.env.PORT)에서 port를 가져온다. 그러나 환경변수 값이 없으면 5050 포트를 지정한다.
var port = app.listen(process.env.PORT || 5050);

// REST API의 한가지 종류인 GET request를 정의하는 부분이다.
// app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
// app.post로 작성할 경우 post 요청으로 정의가 됩니다.
// REST API의 종류(get, post, put, delete 등등)을 사용하여 end point를 작성할 수 있다.
// 변수인 주소에 req에서 받은 요청으로 res로 응답을 해 화면에 보여준다.
app.get("/", (req, res) => {
    // console.log(req);
    console.log("/ 루트로 요청이 왔습니다.")

    // 요청에 대한 응답
    res.send("<h1>Express server Start!!!</h1>");
})

// 변수인 port로 서버를 실행, 실행 후에 함수 실행
// express 서버를 실행할 때 필요한 포트 정의 및 실행시 callback 함수를 받는다.
app.listen(port, () => {
    console.log("start! express server!");
})