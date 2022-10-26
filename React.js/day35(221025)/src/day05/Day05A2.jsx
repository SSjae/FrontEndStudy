// 함수형 컴포넌트에서 state를 사용하려면 useState를 import를 해야한다.
import { useState } from "react";

export default function Day05A2(props) {
    const name = "홍길동";
    // 첫번째는 사용할 때 변수, 두번째는 변경할 때 쓸 함수이다.
    const [count, setCount] = useState(0);
    
    // 클래스형과는 다르게 함수형에서는 이벤트 함수 앞에서 const를 붙여줘야 한다.
    const onClickButton = () => {
        setCount(count + 1);
        console.log("onClickButton => " + count);
    }

    return(
        <div>
            <h3>제 이름은 {name} 입니다.</h3>
            <p>count = {count}</p>
            {/* this.onClick 함수 대신 onClick 함수를 사용한다. */}
            <button type="button" onClick={onClickButton}>버튼을 클릭하세요</button>
        </div>
    )
}