import React from "react";

export default class Day03A2 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { count : 0 };
    }

    onButtonClick = () => {
        console.dir(this.state)
        console.log(this.props);

        // const { count } = this.state; = > const count = this.state.count;
        const { count } = this.state;
        const { max } = this.props;
        // const { count, a, b, c } = this.state; => const count = this.state.count;
                                                //   const a = this.state.a;
                                                //   const b = this.state.b;
                                                //   const c = this.state.c;
        
        // props의 max 까지만 카운팅 하고 싶다.
        if(count >= max) {
            // max를 넘어가면 다시 초기화 해준다.
            this.setState({count : 0})
        } else {
            this.setState({count : count + 1});
        }
    }

    render() {
        return <div>
            <h3>카운트 : {this.state.count}</h3>
            <button type="button" onClick={this.onButtonClick}>클릭하세요</button>
        </div>
    }
}