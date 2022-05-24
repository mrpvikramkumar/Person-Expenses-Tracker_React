import React from "react";

class Lisst2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Lisst2</h2>
        <button onClick={this.props.updateFunction}>Click</button>
      </div>
    );
  }
}

export default Lisst2;