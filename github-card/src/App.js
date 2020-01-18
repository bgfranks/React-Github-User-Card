import React, { Component } from 'react';
import GithubCardList from './Components/GithubCardList'


class App extends Component {

  state = {
    githubData: []
  }

  componentDidMount() {
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