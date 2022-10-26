import { useRef } from "react";

export default function Day05A4() {
    const inputPrev = useRef();
    const inputNext = useRef();

    const onNext = () => {
        inputNext.current.focus()
    }

    const onPrev = () => {
        inputPrev.current.focus()
    }

    // 렌더링 되고 리턴이 되고 나서 밑에 있는 input을 접근할 방법이 없다.
    // 그래서 uesRef를 사용해서 접근
    return (
        <div>
            <h3>useRef</h3>
            <div>
                <input type="text" ref={inputPrev}/>
                <button onClick={onNext}>다음</button>
            </div>
            <div>
                <input type="text" ref={inputNext}/>
                <button onClick={onPrev}>이전</button>
            </div>
        </div>
    )
}