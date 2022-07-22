import React, { Component } from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    console.log(
      "Behavior before the component is added to the DOM in Class Comp."
    );
  }
  componentDidUpdate() {
    console.log(
      "Behavior when the component receives new state or props in Class Comp."
    );
  }

  //  conditional-componentDidUpdate
  // componentDidUpdate(prevProps) {
  //   if (this.state.count !== prevState.foo) {
  //     console.log("Behavior when the value of 'foo' changes.");
  //   }
  // }
  componentWillUnmount() {
    console.log(
      "Behavior right before the component is removed from the DOM in Class Comp."
    );
  }

  render() {
    return (
      <div className="component class">
        <h3>{this.props.title}</h3>
        <h2> {this.state.count}</h2>
        <button onClick={this.increase}> Add</button>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  title: "Counter App using Class Component :",
};

export default ClassComponent;
