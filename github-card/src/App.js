import React, { Component } from "react";
import GithubUserCard from "./Components/GithubUserCard";
import UserForm from "./Components/UserForm";
import styled from "styled-components";

import "./reset.css";

const Body = styled.div`
  text-align: center;
  color: #f3f3f3;

  h1 {
    font-size: 3.5rem;
    padding: 20px 0;
  }

  h2 {
    font-size: 2.5rem;
    padding: 20px 0;
  }
`;

class App extends Component {
  state = {
    githubUserData: [],
    githubFollowerData: [],
    userText: "",
  };

  componentDidMount() {
    fetch("https://api.github.com/users/bgfranks")
      .then(res => res.json())
      .then(user => {
        // console.log(user)
        this.setState({ ...this.state, githubUserData: user });
        // console.log(user.login)
      })
      .catch(err => {
        console.log(err);
      });

    fetch("https://api.github.com/users/bgfranks/followers")
      .then(res => res.json())
      .then(followers => {
        console.log(followers);
        this.setState({ ...this.state, githubFollowerData: followers });
        // console.log(followers[0].login)
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUserTextChange = e => {
    this.setState({ ...this.state, userText: e.target.value });
    console.log(this.state.userText);
  };

  handleUserFetch = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userText}`)
      .then(res => res.json())
      .then(user => {
        // console.log(user)
        this.setState({ ...this.state, githubUserData: user });
        // console.log(user.login)
      })
      .catch(err => {
        console.log(err);
      });

    fetch(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => res.json())
      .then(followers => {
        console.log(followers);
        this.setState({ ...this.state, githubFollowerData: followers });
        // console.log(followers[0].login)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Body>
        <h1>Github Search</h1>
        <UserForm
          value={this.state.userText}
          handleUserTextChange={this.handleUserTextChange}
          handleUserFetch={this.handleUserFetch}
        />
        <GithubUserCard
          user={this.state.githubUserData}
          follower={this.state.githubFollowerData}
        />
      </Body>
    );
  }
}

export default App;
