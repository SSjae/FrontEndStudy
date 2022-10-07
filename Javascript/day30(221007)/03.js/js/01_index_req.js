// 데이터베이스의 데이터를 임의로 만들자(JSON)...

// 사용자 정보 데이터
const users = [
    {id: 'ssjj0402', name: '이승재', password: '1234'},
    {id: 'ssjj04022', name: '이승재2', password: 'abcd'},
    {id: 'ssjj040222', name: '이승재3', password: '0000'}
]

// request 객체를 만들어 가상의 통신을 구현하자...
const request = {
    login: function(id, password) {
        let item = null;
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === id) item = users[i];
        }

        if(item && item.password === password) return item;
        else return null;
    }
}