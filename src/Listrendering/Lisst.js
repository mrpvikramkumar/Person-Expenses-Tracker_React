import React from "react";
import Lisst2 from "./Lisst2";
class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "vikram" };
    this.list = ["ABC", "DEF", "HIG"];
  }

  clickChange = () => {
    this.setState({ name: this.state.name.toUpperCase() });
  };
  render() {
    return (
      <div>
        <h2>name is {this.state.name}</h2>
        <Lisst2 updateFunction={this.clickChange}></Lisst2>
        <h2>Hello World</h2>
        <ul>
          {this.list.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Component1;