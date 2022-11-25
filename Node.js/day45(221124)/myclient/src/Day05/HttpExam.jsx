import axios from "axios";
import React, {useState} from "react";

const HttpExam = (props) => {
    const [data, setData] = useState("서버와 통신을 합시다...")
    
    const onClickGet = () => {
        // GET 방식에서 Node-axios관계에서는 밑에처럼
        // 묶어줘야 query로 데이터를 보낼 수 있다.
        const data = { 
            params: {title: "프론트엔드", label: "안녕하세요!"}
        }

        // GET 방식으로 data를 쿼리로 같이 보냄
        axios.get('/api/hello', data).then(res => {
            console.log(res)
            setData(res.data)
        })
    }
    const onClickDelete = () => {
        // Delete 방식에서 Node-axios관계에서는 밑에처럼
        // 묶어줘야 query로 데이터를 보낼 수 있다.
        const data = { 
            params: {title: "프론트엔드", label: "안녕하세요!"}
        }

        // Delete 방식으로 data를 쿼리로 같이 보냄
        axios.delete('/api/hello', data).then(res => {
            console.log(res)
            setData(res.data)
        })
    }

    const onClickPost = () => {
        // Post는 body로 보내기 때문에 params를 따로 안 적어도 됨
        const data = {title: "프론트엔드", label: "안녕하세요!"}

        axios.post('/api/hello', data).then(res => {
            console.log(res)
            setData(res.data)
        })
    }
    const onClickPut = () => {
        // Put는 body로 보내기 때문에 params를 따로 안 적어도 됨
        const data = {title: "프론트엔드", label: "안녕하세요!"}

        axios.put('/api/hello', data).then(res => {
            console.log(res)
            setData(res.data)
        })
    }

    return (
        <>
            <h1>{data}</h1>

            <button onClick={onClickGet}>GET 통신</button>
            <button onClick={onClickPost}>POST 통신</button>
            <button onClick={onClickPut}>PUT 통신</button>
            <button onClick={onClickDelete}>DELETE 통신</button>
        </>
    )
}

export default HttpExam