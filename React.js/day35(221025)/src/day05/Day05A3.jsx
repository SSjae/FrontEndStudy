import { useState, useEffect } from "react";

export default function Day05A3(props) {
    const [count, setCount] = useState(Number(props.value));
    const [name, setName] = useState("홍길동");

    useEffect(() => {
        console.log(count);
        if(count === 5) {
            setName("김유신")
        } else if(count === 10) {
            setName("강감찬")
        }
    }, [count])

    const onClickButton = () => {
        setCount(count + 1);

        // // 이 이벤트 함수 안에서는 count가 아직 1이 더하기 전이기 때문에
        // // 정상적으로 작동 안됨, 렌더링 이후 발생하는 함수인 useEffect를 사용
        // if(count === 5) {
        //     setName("김유신")
        // } else if(count === 10) {
        //     setName("강감찬")
        // }
    }

    return (
        <div>
            <h3>제 이름은 {name} 입니다.</h3>
            <p>count = {count}</p>
            <button type="button" onClick={onClickButton}>버튼을 클릭하세요</button>
        </div>
    )
}