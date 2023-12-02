import React from "react";

class Test extends React.Component {
    state = {
        time: 10,
        counterValue: 0,
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            if (this.state.counterValue < 11) {
                this.setState(prevState => ({ 
                    time: 1, 
                    counterValue: this.counter(prevState.counterValue)
                }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    counter = (value) => {        
        return value + 1;
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <p>Counter: {this.state.counterValue}</p>
            </div>
        );
    }
}

export default Test;
