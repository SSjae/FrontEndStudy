import IMG_LOGO from "../images/facebook-logo.svg"
// 반복되는 것을 외부에 컴포넌트를 만들어서 import를 해서 사용
import {Input, Image, Button, Linebar, Title} from "./Component.jsx"

export default function Login(props) {
    return (
        <div className="login-layer">
            <div className="logo-box">
                <Image src={IMG_LOGO} alt="" />
                <Title text="Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요"></Title>
            </div>
            <div className="login-box">
                <div>
                    <Input title={true} type="text" placeholder="이메일 또는 전화번호"/>
                    <Input title={true} type="password" placeholder="비밀번호"/>

                    <Button type={"primary"} className="login-button" onClick={() => window.location.href = "/"} text="로그인">로그인</Button>
                    <a onClick={() => window.location.href = "/identify"}>비밀번호를 잊으셨나요?</a>
                    <Linebar/>
                    <div className="regist">
                        <Button type={"secondary"} onClick={() => window.location.href = "/regist"} text="새 계정 만들기"/>
                    </div>
                </div>
            </div>
        </div>
    )
}