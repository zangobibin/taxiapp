import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserService from './services/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
    };
  }

  loadUser() {
    console.log('Lets get some Users');
    UserService.search().then((response) => {
      console.log(response);
      this.setState({
        firstName: response[0][0],
        lastName: response[0][1],
        email: response[0][2],
      });
    });
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          WELCOME {this.state.lastName} {this.state.firstName}
          -- {this.state.email}
        </p>
        <button onClick={() => this.loadUser()}>Get Developer</button>
      </div>
    );
  }
}

export default App;
