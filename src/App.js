import React, { Component } from 'react';
import logo from './logo.svg';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import MapBox from './components/MapBox';

import './App.css';

class App extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

  return (
    <div className="App">
      <Navbar />
      <h1>Login with Facebook and Google</h1>
      <FacebookLogin
      appId=""
      fields="name,email,picture"
      callback={responseFacebook}
      />
      <br />
      <br />

      <GoogleLogin
      clientId=""
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />

      <Landing />

      <MapBox />
    </div>
  );
}
}

export default App;
