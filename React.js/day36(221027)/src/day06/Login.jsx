import { useState, useRef } from "react"

export default function Login(props) {
    const [userid, setUserId] = useState();
    const [password, setPassword] = useState();
    const pass = useRef();

    const onChangeInput = (event) => {
        console.log(event.target.value)
        setUserId(event.target.value)
    }

    const onChangePassword = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const onLogin = () => {
        // userid === null || userid === undefined || userid === ""
        // !userid 는 같은 의미
        if(!userid ) {
            alert("사용자 아이디를 입력하세요!");
            document.querySelector("#login").focus();
            return
        }

        if(!password ) {
            alert("비밀번호를 입력하세요!");
            pass.current.focus();
            return
        }

        // 로그인이 되었습니다.
        alert(userid + "(" + password +") 로 로그인 하였습니다.");
    }

    const onKey = (event) => {
        if(!userid) return

        if(event.keyCode === 13) {  // 엔터키이면
            pass.current.focus();
        }
    }

    const onKeyP = (event) => {
        if(!password) return

        if(event.keyCode === 13) {  // 엔터키이면
            onLogin();
        }
    }

    return (
        <div className="login-box">
            <input id="login" className="input-email" type="text" onChange={onChangeInput} placeholder="이메일 또는 전화번호를 입력하세요" onKeyUp={onKey} autoFocus/>
            <input ref={pass} className="input-pass" type="password" onChange={onChangePassword} placeholder="비밀번호를 입력하세요" onKeyUp={onKeyP}/>

            <button className="login-button" name="login" onClick={onLogin}>로그인</button>

            <span>비밀번호를 잊으셨나요?</span>
            <div className="div-line"></div>
            <span>새 계정 만들기</span>
        </div>
    )
}