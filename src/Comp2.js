import React from "react";

class Compo2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Compo2</h2>
        <button onClick={this.props.updateFunction}>Click Here</button>
        <h2>Have A good day 2</h2>
      </div>
    );
  }
}

export default Compo2;
