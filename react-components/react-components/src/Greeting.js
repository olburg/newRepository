import React from "react";
import "./Greeting.css";

const styles = {
  color: "red",
  fontStyle: "italic",
};

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: "Hello",
    };
  }

  renderChildren() {
    return this.props.children ? <p>{this.props.children}</p> : null;
  }

  handleBye = () => {
      this.setState ({greet: "Bye"})
  }

  render() {
    return (
      <div>
        <h1 className="greeting-h1" style={styles}>
          {this.state.greet}, {this.props.name}!
        </h1>
        <button onClick={this.handleBye}>Bye</button>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Greeting;
