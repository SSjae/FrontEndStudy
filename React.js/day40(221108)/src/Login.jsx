import IMG_LOGO from "./images/facebook-logo.svg"
// 반복되는 것을 외부에 컴포넌트를 만들어서 import를 해서 사용
import {InputBox} from "./Component.jsx"

export default function Login(props) {
    return (
        <div className="login-layer">
            <div className="logo-box">
                <img src={IMG_LOGO} alt="" />
                <h2>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요</h2>
            </div>
            <div className="login-box">
                <div>
                    <InputBox title="true" cn="input-email" tp="text" nm="email" guide="이메일 또는 전화번호"/>
                    <InputBox title="true" cn="input-pass" tp="password" nm="password" guide="비밀번호"/>

                    <button className="login-button" onClick={() => window.location.href = "/"}>로그인</button>
                    <a onClick={() => window.location.href = "/identify"}>비밀번호를 잊으셨나요?</a>
                    <div className="div-line"></div>
                    <div>
                        <span className="regist" onClick={() => window.location.href = "/regist"}>새 계정 만들기</span>
                    </div>
                </div>
            </div>
        </div>
    )
}