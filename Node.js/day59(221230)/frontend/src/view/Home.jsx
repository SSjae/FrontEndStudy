import { Image, Title, Subtitle, Button, Input } from './Component';
import Header from './Header.jsx';

import EDU_ICON from '../images/edu_icon.png';
import MORE_ICON from '../images/more.png';
import HOME_ICON from '../images/home.png';
import YOUTUBE_ICON from '../images/youtube.png';
import PEOPLE_ICON from '../images/people.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(props) {
    const [array, setArray] = useState([]);

    useEffect(() => {
        axios.get('/api/home').then((res) => {
            console.log(res.data);
            setArray(res.data.result);
        });
    }, []);

    const onRefreshHome = () => {
        console.log('onrefresh call');
        axios.get('/api/home').then((res) => {
            console.log(res.data);
            setArray(res.data.result);
        });
    };

    return (
        <>
            <Header name="home" />

            <section className="home-layer">
                <ul className="list">
                    {array &&
                        array.map((item, index) => {
                            //console.log(item);
                            return (
                                <CardBox key={item.homeid} value={item} onRefresh={onRefreshHome} />
                            );
                        })}
                </ul>
            </section>
        </>
    );
}

const CardBox = (props) => {
    const { homeid, likecount, title, subtitle, tags, url, text, image } = props.value;
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState([]);

    useEffect(() => {
      axios.get('/api/home/comment', { params: {homeid: homeid} }).then((res) => {
          console.log(res.data);
          setComment(res.data.result);
      });
  }, []);

    const onClickLike = () => {
        // console.log(props.value)
        axios.put('/api/home/like', { homeid: homeid, likecount: likecount }).then((res) => {
            props.onRefresh();
        });
    };

    const onClickComment = () => {
      console.log("show comment box ====> " + show);
      setShow(!show); //true => false, false => true
    };

    const onRefresh = () => {
      axios.get('/api/home/comment', { params: {homeid: homeid} }).then(res => {
        setComment(res.data.result)
      })
    }

    return (
        <li>
            <div className="card">
                <div className="head">
                    <div>
                        <Image src={EDU_ICON} alt="?????? ?????????" />
                        <span className="title">{title}</span>
                        <Image className="more" src={MORE_ICON} alt="????????? ??????" />
                    </div>
                    <div className="text">
                        <p>{subtitle}</p>
                        <p className="blue">{tags}</p>
                    </div>
                </div>
                <div className="body">
                    <div className="image">
                        <Image src={image} alt="?????? ?????? ?????????" />
                    </div>
                    <div className="text">
                        <div>
                            <p className="grey sm">{url}</p>
                            <p className="bold">{text}</p>
                        </div>
                        <button>??? ????????????</button>
                    </div>
                </div>
                <div className="foot">
                    <div className="btn-box active">
                        <div>
                            <Image src={HOME_ICON} alt="??? ????????????" />
                            <span className="btn-text" onClick={onClickLike}>
                                ?????????({likecount})
                            </span>
                        </div>
                    </div>
                    <div className="btn-box">
                        <div>
                            <Image src={YOUTUBE_ICON} alt="????????? ????????????" />
                            <span className="btn-text" onClick={onClickComment}>
                                ?????? ??????
                            </span>
                        </div>
                    </div>
                    <div className="btn-box">
                        <div>
                            <Image src={PEOPLE_ICON} alt="????????? ????????????" />
                            <span className="btn-text">?????? ??????</span>
                        </div>
                    </div>
                </div>
                {show === true && <CommentBox homeid={homeid} onRefresh={onRefresh} list={comment} />}
            </div>
        </li>
    );
};

const CommentBox = (props) => {
  const [text, setText] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)

  const onChangeText = (event) => {
    setText(event.target.value)
  }

  const onClickSave = () => {
    axios.post("/api/home/comment", {homeid: props.homeid, text: text}).then((res) => {
      console.log(res);
      setText("")
      props.onRefresh && props.onRefresh()
    })
  }

  const onClickRemove = (cmtid) => {
    axios.delete("/api/home/comment", {params: {cmtid: cmtid}}).then(res => {
      props.onRefresh && props.onRefresh()
    })
  }

  const onClickEdit = (item) => {
    setSelectedItem(item)
  }

  const onChangeEdit = (event) => {
    console.log(event.target.value)
    const item = {...selectedItem}
    item.text = event.target.value
    setSelectedItem(item)
  }

  const onClickUpdate = () => {
    axios.put("/api/home/comment", {cmtid: selectedItem.cmtid, text: selectedItem.text}).then(res => {
      setSelectedItem(null)
      props.onRefresh && props.onRefresh()
    })
  }

  return <div className='comment-box'>
    <ul>
      {props.list && props.list.map(item => {
        return <li key={item.cmtid}>{item.text}
        <div className='buttons'>
          <Button type="primary" onClick={() => onClickEdit(item)} text="??????"></Button>
          <Button type="secondary" onClick={() => onClickRemove(item.cmtid)} text="??????"></Button>
        </div>
        </li>
      })}
    </ul>
    <div className='input-box'>
      {selectedItem ? <>
          {/* ????????? ?????? ?????? */}
          <textarea onChange={onChangeEdit} value={selectedItem.text} />
          <Button type="secondary" onClick={onClickUpdate} text="??????" />
        </> 
      : <>
          {/* ????????? ?????? ?????? */}
          <textarea placeholder='????????? ????????? ???????????????' onChange={onChangeText} value={text}/>
          <Button type="primary" onClick={onClickSave} text="??????" />
        </>
      }
    </div>
  </div>
}
