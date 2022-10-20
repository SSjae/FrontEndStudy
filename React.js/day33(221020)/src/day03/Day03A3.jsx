import React from "react";

export default class Day03A3 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {birthday : 2000};
    }

    // 함수를 만들때 주의할 점은 this를 사용을 위해
    // 반드시 화살표(=>) 함수를 이용해 함수를 만들어야 한다.
    onChangeSelect = (event) => {
        console.log(this.state);
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        
        this.setState({birthday: event.target.value});
    }

    render() {
        return <div>
            <h3>생년월일 : {this.state.birthday}</h3>
        
            {/* value를 바뀌는 state로 설정 */}
            <select onChange={this.onChangeSelect} value={this.state.birthday}>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
            </select>
        </div>
    }
}