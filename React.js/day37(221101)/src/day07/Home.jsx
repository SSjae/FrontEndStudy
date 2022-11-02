import { useState } from 'react'
// import SAMPLE_IMG from "./images/sample-image.jpg"
import CLOSE_IMG from "./images/close.png"
import GAME_1 from "./images/game-1.jpg"
import GAME_2 from "./images/game-2.jpg"
import GAME_3 from "./images/game-3.jpg"

// 1차로 반복적인 아이템을 리펙토링하자.
export default function Home(props) {
    // const [count, setCount] = useState(0);
    const [list, setList] = useState([
        {name: 'Cha & Kwon', title: '변호사 및 법률 사무소', text: '정천수 님.', img: GAME_1, count: 0},
        {name: '홍길동', title: '우리의 영웅', text: '홍길동의 무예는 1단.', img: GAME_2, count: 0},
        {name: '이순신', title: '임진왜란', text: '우리에겐 아직 12척의.', img: GAME_3, count: 0},
    ])

    const onClickLink = () => {
        window.open("http://www.daum.net");
    }

    const onClickLike = (item) => {
        // setCount를 쓰지 않고 화면에 나타내기 위해서는
        // list의 값을 변경시켜서 setList를 통해 업데이트 시켜주면 된다.
        // 그냥 list를 setList로 업데이트를 시켜주면 React는 알지 못한다.
        // [...list] 를 써서 복사해서 다시 업데이트를 하는 것이다.
        // 반드시 복사를 해서 새로 만들어서 업데이트를 해야만이 DOM에도 반영이 된다.
        item.count = item.count + 1;
        console.log(item)
        const array = [...list]
        setList(array)
        // setCount(count + 1);
    }

    return (
        <section className='container'>
            <ul className='list'>
                {/* 반복될 요소 */}
                {
                // list map을 할 때 index를 주면 하나씩 반복 될 때마다 1씩 증가한다.
                list.map((item, index) => {
                    console.log(item);

                    // 반복되는 list는 key를 주어야 한다.
                    // 하나씩 증가하는 index를 key로 주어 다 다르게 키를 할당한다.
                    // 웬만하면 key는 주어야 한다.
                    return <li key={index}>
                        <div className='card'>
                            <img src={item.img} alt="샘플이미지" />
                            <div className='text'>
                                <span className='title' onClick={onClickLink}>{item.name}</span>
                                <span className='label'>{item.title}</span>
                                <span className='label'>{item.text}</span>
                                <span className='label'>{item.count}</span>
                            </div>
                            <button onClick={() => onClickLike(item)}>좋아요</button>
                            <span className='btn-box'>
                                <img src={CLOSE_IMG} alt="닫기 버튼" />
                            </span>
                        </div>
                    </li>
                })
                }
                
            </ul>
        </section>
    )
}