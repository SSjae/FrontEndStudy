import React from "react";

export default class Day02A5 extends React.Component {
    constructor(props) {
        super(props); // 무조건 써줘야 됨
        console.log("constructor() ====================> ");

        // 자기의 변수를 정리할 때 많이 사용
        this.state = { count:0 };
    }

    componentDidMount() {
        console.log("componentDidMount() ====================> ");
        // 렌더링 이후 만들어진 DOM을 접근하기 위해 사용
    }

    componentWillUnmount() {
        console.log("componentWillUnMount() ====================> ")
    }

    render() {
        console.log("render() ====================> ");
        return (
        <ul>
            <li>props.title = {this.props.title}</li>
            <li>props.name = {this.props.name}</li>
            <li>props.value = {this.props.value}</li>
            <li>state.count = {this.state.count}</li>
        </ul>
        )
    }
}