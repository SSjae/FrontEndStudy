import { Image, Title, Subtitle, Button, Input } from "./Component"
import Header from './Header.jsx'

import EDU_ICON from '../images/edu_icon.png'
import MORE_ICON from '../images/more.png'
import MAIN_IMAGE_1 from '../images/game-1.jpg'
import MAIN_IMAGE_2 from '../images/game-2.jpg'
import MAIN_IMAGE_3 from '../images/game-3.jpg'
import HOME_ICON from '../images/home.png'
import YOUTUBE_ICON from '../images/youtube.png'
import PEOPLE_ICON from '../images/people.png'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home(props) {
  const [array, setArray] = useState("");

  // 이 홈이라는 것이 생성될 떄 딱 한번(didmount와 같은)
  useEffect(() => {
    axios.get("/api/home", {}).then((res) => {
      // console.log(res.data);
      setArray(res.data.result)
    })
  }, [])

  const onRefreshHome = () => {
    console.log("onfresh")
    axios.get("/api/home", {}).then((res) => {
      // console.log(res.data);
      setArray(res.data.result)
    })
  }

  // const value = {title, subtitle, tags, url, text}
  return (
    <>
      <Header name="home" />

      <section className="home-layer">
        <ul className="list">
          {array && array.map((item, index) => {
            return <CardBox key={item.no} value={item} onRefresh={onRefreshHome}/>
          })}
        </ul>
      </section>
    </>
  )
}

const CardBox = (props) => {
  const {no, likecount, title, subtitle, tags, url, text, image} = props.value

  const onClickLike = () => {
    // console.log(props.value)
    axios.put("/api/home/like", {no: no, like: 1}).then(res => {
      props.onRefresh();
    })
  }

  const onClickComment = () => {

  }
  return <li>
    <div className="card">
      <div className="head">
        <div>
          <Image src={EDU_ICON} alt="광고 아이콘" />
          <span className="title">{title}</span>
          <Image className="more" src={MORE_ICON} alt="더보기 메뉴" />
        </div>
        <div className="text">
          <p>{subtitle}</p>
          <p className="blue">{tags}</p>
        </div>
      </div>
      <div className="body">
        <div className="image">
          <Image src={image} alt="광고 메인 이미지" />
        </div>
        <div className="text">
          <div>
            <p className="grey sm">{url}</p>
            <p className="bold">{text}</p>
            <p className="grey"></p>
          </div>
          <button>더 알아보기</button>
        </div>
      </div>
      <div className="foot">
        <div className="btn-box active">
          <div>
            <Image src={HOME_ICON} alt="홈 바로가기" />
            <span className="btn-text" onClick={onClickLike}>좋아요({likecount})</span>
          </div>
        </div>
        <div className="btn-box">
          <div>
            <Image src={YOUTUBE_ICON} alt="동영상 바로가기" />
            <span className="btn-text" onClick={onClickComment}>댓글 달기</span>
          </div>
        </div>
        <div className="btn-box">
          <div>
            <Image src={PEOPLE_ICON} alt="사용자 바로가기" />
            <span className="btn-text">공유 하기</span>
          </div>
        </div>
      </div>
    </div>
  </li>
}