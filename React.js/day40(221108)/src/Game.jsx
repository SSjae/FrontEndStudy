import IMAGE_a from "./images/game-a.jpg"
import IMAGE_b from "./images/game-b.jpg"
import IMAGE_c from "./images/game-c.jpg"
import RIGHT from "./images/right.png"
import LEFT from "./images/left.png"
import IMAGE_1 from "./images/game-1.jpg"
import IMAGE_2 from "./images/game-2.jpg"
import IMAGE_3 from "./images/game-3.jpg"

import Header from "./Header.jsx"
import Menu from "./Menu"
import { useState } from "react"

export default function Game(props) {
    const [menu, setMeun] = useState(false)

    const onClickMenu = (show) => {
        setMeun(show)
    }

    return (
        <>
            <Header name="game" onClick={() => onClickMenu(true)}/>
            <Menu show={menu} onClick={() => onClickMenu(false)} />
            <div className="game-layer">
                <ul className="list">
                    <li className="img-box left">
                        <img src={IMAGE_a} alt=""/>
                    </li>
                    <li className="img-box center">
                        <button className=""><img src={LEFT} alt="왼쪽"/></button>
                        <img src={IMAGE_b} alt=""/>
                        <button className="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
                    </li>
                    <li className="img-box right">
                        <img src={IMAGE_c} alt=""/>
                    </li>
                </ul>

                <div className="card">
                    <h3 className="title">추천게임</h3>
                    <ul>
                        <li className="c-li"><img src={IMAGE_1} alt=""/></li>
                        <li className="c-li"><img src={IMAGE_2} alt=""/></li>
                        <li className="c-li"><img src={IMAGE_3} alt=""/></li>
                        <li className="c-li"><img src={IMAGE_1} alt=""/></li>
                        <li className="c-li"><img src={IMAGE_2} alt=""/></li>
                        <li className="c-li"><img src={IMAGE_3} alt=""/></li>
                        <button><img src={RIGHT} alt="오른쪽"/></button>
                    </ul>
                </div>
            </div>
        </>
    )
}