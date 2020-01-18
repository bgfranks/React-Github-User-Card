import React, { Component } from 'react';
import GithubCardList from './Components/GithubCardList'


class App extends Component {

  state = {
    githubData: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/bgfranks')
      .then(res => res.json())
      .then(user => {
        // console.log(user)
        this.setState({ ...this.state, githubData: user })
        // console.log(user.login)
      })
      .catch(err => {
        console.log(err)
      })
  }




  render() {
    return (
      <div>
        <h1>hi</h1>
        <GithubCardList />
      </div>
    )
  }
}


export default App;