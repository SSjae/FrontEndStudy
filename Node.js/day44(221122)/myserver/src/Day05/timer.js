const TimerExam = {
    timeout: () => {
        setTimeout(() => {
            console.log("1.5초 후에 실행됩니다.")
        }, 1500)
    },

    interval: () => {
        setInterval(() => {
            console.log("1초 마다 실행됩니다.")
        }, 1000)
    },

    clear: () => {
        const timer1 = setTimeout(() => {
            console.log("3초 후에 실행됩니다.")
        }, 3000)

        const timer2 = setInterval(() => {
            console.log("1초마다 실행되는 인터벌....")
        }, 1000)

        // 2초후에 실행될 타이머
        setTimeout(() => {
            console.log("2.5초 후에 실행되는 타이머 클리어")

            // 첫번째 타이머 setTimeout 삭제
            clearTimeout(timer1);

            // 두번째 타이머 setInterval를 삭제
            clearInterval(timer2);
        }, 2500)
    },

    counter: () => {

        let count = 1;

        // 10까지만 카운팅할 타이머를 생성하자...
        const timer = setInterval(() => {
            console.log("타이머 =====> " + count)
            count++;
            if(count > 10) {
                clearInterval(timer)
            }
        }, 1000)
    },

    // 문제 10 ~ 1까지 카운트하는 다운 카운트를 만드세요
    downcounter: () => {
        var count = 10;

        const downtimer = setInterval(() =>{
            console.log("다운타이머 ====> " + count)
            count--;
            if(count < 0) {
                clearInterval(downtimer)
            }
        }, 1000)
    }
}

module.exports = TimerExam