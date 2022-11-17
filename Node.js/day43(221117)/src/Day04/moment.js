const moment = require("moment")

const Moment = {
    today: () => {
        console.log("today ===> ");
        console.log(moment());  // 현재 날짜 및 시간
    },
    date: () => {
        console.log("date ===> ");
        console.log(moment("2022-01-27"));  // 내가 지정한 날짜
        console.log(moment("2022/01/27", "YYYY/MM/DD"));  // 뒤에 변수 형식으로 넣었어 알아서 기본으로 해줘 의미
        console.log(moment("20220127", "YYYYMMDD"));  // 뒤에 변수 형식으로 넣었어 알아서 기본으로 해줘 의미
        console.log(moment("2022#01#27", "YYYY#MM#DD"));  // 뒤에 변수 형식으로 넣었어 알아서 기본으로 해줘 의미
    },
    format: () => {
        console.log("format ===> ");
        const date = moment();  // 오늘 날짜의 시간으로 만들 moment

        console.log("년-월-일 ====> " + date.format("YYYY-MM-DD"));
        console.log("시:분:초 ====> " + date.format("HH:mm:ss"));
        console.log("요일 ====> " + date.format("dddd"));
        console.log("년-월-일 요일 ===> " + date.format("YYYY-MM-DD dddd"));
        console.log("년-월-일 시:분:초 ===> " + date.format("YYYY-MM-DD HH:mm:ss"));
        console.log("년-월-일 요일 시:분:초 ===> " + date.format("YYYY-MM-DD dddd HH:mm:ss"));
        console.log("년-월-일 요일 시:분:초.밀리초 ===> " + date.format("YYYY-MM-DD dddd HH:mm:ss.SSS"));
        console.log("월-일 ===> " + moment("2022-05-04").format("M/D일"));
    },
    add: () => {
        console.log("add or subtract ===> ");

        // 날짜 더하기
        console.log(moment("2022-01-27").add(1, "days"));

        // 포맷을 같이 이용하자.
        const day = moment("2022-10-10 10:10:10").add(1, "years").format("YYYY-MM-DD HH:mm:ss");
        console.log("년 더하기 ===> " + day);
        console.log("월 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "months").format("YYYY-MM-DD HH:mm:ss"))
        console.log("일 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "days").format("YYYY-MM-DD HH:mm:ss"))
        console.log("시 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "hours").format("YYYY-MM-DD HH:mm:ss"))
        console.log("분 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "minutes").format("YYYY-MM-DD HH:mm:ss"))
        console.log("초 더하기 ===> " + moment("2022-10-10 10:10:10").add(1, "seconds").format("YYYY-MM-DD HH:mm:ss"))
        
        console.log("년 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "years").format("YYYY-MM-DD HH:mm:ss"))
        console.log("월 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "months").format("YYYY-MM-DD HH:mm:ss"))
        console.log("일 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "days").format("YYYY-MM-DD HH:mm:ss"))
        console.log("시 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "hours").format("YYYY-MM-DD HH:mm:ss"))
        console.log("분 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "minutes").format("YYYY-MM-DD HH:mm:ss"))
        console.log("초 빼기 ===> " + moment("2022-10-10 10:10:10").add(-1, "seconds").format("YYYY-MM-DD HH:mm:ss"))
        
        console.log("년 빼기 ===> " + moment("2022-10-10 10:10:10").subtract(1, "years").format("YYYY-MM-DD HH:mm:ss"))
    },
    diff: () => {
        // 시간의 차이
        console.log("diff ===> ");
        
        console.log("년 차이 ===> " + moment("2022-10-10").diff("2023-11-11", "years"));
        // 개월 수로 차이를 구함 그래서 년도는 2년차라도 개월 수가 안되면 1년차로 됨
        console.log("년 차이 ===> " + moment("2022-10-10").diff("2020-09-10", "years"));
        

        console.log("월 차이 ===> " + moment("2022-10-10").diff("2023-10-10", "months"));
        console.log("일 차이 ===> " + moment("2022-10-10").diff("2020-09-10", "months"));

        console.log("일 차이 ===> " + moment("2022-10-10").diff("2023-10-10", "days"));
        console.log("일 차이 ===> " + moment("2022-10-10").diff("2020-09-10", "days"));

        console.log("시 차이 ===> " + moment("2022-10-10 10:10:10").diff("2023-10-10 10:10:10", "hours"));
        console.log("시 차이 ===> " + moment("2022-10-10 10:10:10").diff("2020-09-10 10:10:10" , "hours"));

        console.log("분 차이 ===> " + moment("2022-10-10 10:10:10").diff("2023-10-10 10:10:10", "minutes"));
        console.log("분 차이 ===> " + moment("2022-10-10 10:10:10").diff("2020-09-10 10:10:10" , "minutes"));

        console.log("초 차이 ===> " + moment("2022-10-10 10:10:10").diff("2023-10-10 10:10:10", "seconds"));
        console.log("초 차이 ===> " + moment("2022-10-10 10:10:10").diff("2020-09-10 10:10:10" , "seconds"));
    }
}

module.exports = Moment;