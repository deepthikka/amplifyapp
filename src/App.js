import React from 'react';
import { Auth } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';

function App() {

 async function checkUser() {
   const user =  await Auth.currentAuthenticatedUser();
   console.log('user : ' + user)
 }


 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => Auth.federatedSignIn()}> Sign in</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      </header>
    </div>
  );
}

export default App;