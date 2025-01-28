import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sachin-p96");
    const userDetails = await data.json();
    console.log("userDetails", userDetails);
    this.setState({
      name: userDetails.login,
    });
  }
  render() {
    const handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <>
        <h1>Hey Im {this.state.name}</h1>
        <p>
          Founder Of This Web app . Inspired Frontend dev . i have{" "}
          years of experience
        </p>
        <button onClick={handleClick}>Increase the experince</button>
      </>
    );
  }
}

export default UserClass;
