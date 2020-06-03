import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrementer extends Component {
    constructor(props) {
        super(props);
        this.state = { number: props.start};
    }

    handleDecrement = (state) => {
        if(state.number === 0)
        {
            return alert("Cannot go lower than zero.");
        }
        this.setState({number: state.number - 1});
    };

    render() {
        return (
            <div>
                {this.state.number}{" "}
                <button onClick={() => this.handleDecrement(this.state)}>decrement</button>
            </div>
        );
    }
}

Decrementer.propTypes = {
    start: PropTypes.number.isRequired,
};

export default Decrementer;