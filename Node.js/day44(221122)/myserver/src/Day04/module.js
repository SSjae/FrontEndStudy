// module.exports를 exp 변수에 넣는다.
// 변수에 따로 넣는 이유는 밑에 처럼 새로운 값들을 추가하기 위해서 한다.
// 하지만 상대적으로 한번에 그룹화하는 경우가 많다.

const exp = module.exports = {
    add: function(a, b) {
        return a + b;
    },
    sub: (a, b) => a - b
}

exp.mul = function(a, b) {
    return a * b;
}

exp.div = (a, b) => a / b

// 모듈로 exports 하겠다.
module.exports = {
    add: function(a, b) {
        return a + b;
    },
    sub: (a, b) => a - b,
    mul: function(a, b) {
        return a * b;
    },
    div: (a, b) => a / b
}