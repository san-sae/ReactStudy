import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component { 
    constructor(props){
        // super(props) : 부모 클래스인 React.Component의 생성자를 호출하면서 props를 전달함
        super(props);

        this.state = {};
    }

    // 각 Lifecycle method
    componentDidMount() { // 컴포넌트 마운트 이후 호출
        console.log(`${this.props.id} componentDidMount() called.`)
    }

    componentDidUpdate() { // 컴포넌트 업데이트 이후 호출
        console.log(`${this.props.id} componentDidUpdate() called.`)
    }

    componentWillUnmount() { // 컴포넌트 언마운트 이전 호출
        console.log(`${this.props.id} componentWillUnmount() called.`)
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;