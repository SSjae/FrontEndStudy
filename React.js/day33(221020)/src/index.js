import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Day02A1 from './day02/Day02A1';
import Day02A2 from './day02/Day02A2';
import Day02A3 from './day02/Day02A3';
import Day02A4 from './day02/Day02A4';
import Day02A5 from './day02/Day02A5';
import Day03A1 from './day03/Day03A1';
import Day03A2 from './day03/Day03A2';
import Day03A3 from './day03/Day03A3';

var start = "10";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <Day02A1 />
    // <Day02A2 />
    // <Day02A3 />
    // <Day02A4 title="제 이름은" name="홍길동" age="40"/>
    // <Day02A5 title="제 이름은" name="홍길동" value="40"/>
    // <Day03A1 start={start} end={100} /> // 숫자는 {}로 감싸줘야 한다.
    // <Day03A2 max={10} />
    <Day03A3 />
);
