import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  render() {
    const handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <>
        <h1>Hey Im {this.props.name}</h1>
        <p>
          Founder Of This Web app . Inspired Frontend dev . i have{" "}
          {this.state.count} years of experience
        </p>
        <button onClick={handleClick}>Increase the experince</button>
      </>
    );
  }
}

export default UserClass;
