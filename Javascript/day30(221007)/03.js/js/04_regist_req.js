// 데이터베이스의 데이터를 임의로 만들자.

const users = [
    {id: 'ssjj0402', name: '이승재', password: '1234'},
    {id: 'ssjj04022', name: '이승재2', password: 'abcd'},
    {id: 'ssjj040222', name: '이승재3', password: '0000'}
]

const request = {
    regist: function(json) {
        users.push(json);
        console.log(users);
    }
}