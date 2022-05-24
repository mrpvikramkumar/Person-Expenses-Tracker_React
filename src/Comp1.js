import React from "react";
import Comp2 from "./Comp2";
class Compo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "vikram kumar" };
  }
  clickChange = () => {
    this.setState({ name: this.state.name.toUpperCase() });
  };

  render() {
    return (
      <div>
        <>
          <h2> Name is {this.state.name}</h2>
          <button onClick={this.clickChange}>Click Here1</button>
          <Comp2></Comp2>
          <h2>Have A good day</h2>
        </>
      </div>
    );
  }
}

export default Compo1;
