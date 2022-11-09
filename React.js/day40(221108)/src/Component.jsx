// 이렇게 반복되는 것을 컴포넌트로 만들어서 더 간단하게 사용(props 사용)
export const InputBox = (props) => {
    return (
        <div>
            {/* 어떤 화면에서는 보여주고 안 보여주고는 삼항연산자를 이용해서 사용 */}
            {props.title ? <div className="text-left">{props.guide}</div> : ""}
            <input className={props.cn} type={props.tp} name={props.nm} placeholder={props.guide} />
        </div>
    )
}