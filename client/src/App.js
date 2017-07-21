import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
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
    const responseGoogle = (response) => {
      console.log(response);
    }
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
        <br/>
        <br/>
        <GoogleLogin
          clientId="AIzaSyBu__4pXUQjYS7CuA3svGmUpWZWUSDhFyQ.apps.googleusercontent.com"
          buttonText="Login with Google Account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default App;
