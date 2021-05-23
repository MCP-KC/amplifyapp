import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import '../../HeroSection.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../../aws-exports';
import { I18n, Auth } from 'aws-amplify';
import  { Redirect, Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import {useBetween} from "use-between"
import {useShareableState} from "../../../useShareableState"

function SignOut() {
  var lightBg=false;

  const authScreenLabels = {
    'en': {
      'Password': "Password",
        'Sign Up': "Createdfsdf new account",
        'Sign Up Account': "Create a nesfsfw account",
        'Sign In': "Cdfdsfsdfsdfscount",
        'Sign In Account': "Crsdfsdfsdccount"
    },
    'de': {
      'Password *': "Passwort *",
      'Enter your password': "Geben Sie bitte Ihr Passwort ein",
      'Have an account?': "Haben Sie einen Account?",
      'Username *': "Benutzername *",
      'Phone Number *': "Telefonnummer *",
      'Email Address *': "Emailadresse *",
      'Enter your username': "Geben Sie bitte Ihren Benutzernamen an",
      'Forgot your password?': "Haben Sie Ihr Passwort vergessen?",
      'Reset password': "Passwortrücksetzung",
      'No account?': "Noch nicht registriert?",
      'Sign Up': "Erstellen Sie einen neuen Account",
      'Sign Up Account': "Erstellen Sie einen neuen Account",
      'Sign in to your account': "Melden Sie sich bitte an",
      'Sign In': "Anmelden",
      'Sign In Account': "Melden Sie sich bitte an"
    }
  };

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const { username, setUsername, count } = useBetween(useShareableState);

  Amplify.configure(awsconfig);
  
    const [authState, setAuthState] = useState();
    const [authUser, setUser] = useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUsername('nobody');
            this.setState({ a: true });
            alert("Username in SignUp1: " + username);
            //this.forceUpdate() 
            Navbar.forceUpdate()}
        )
        
    }, []);


  //I18n.putVocabularies(authScreenLabels);

   let dummyProp = Math.random();

  async function signOut() {
    try {
        await Auth.signOut();
        return true;
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  //alert("AuthState " + authState);



    let a=signOut();
    setUsername('nobody');
    //alert("to be logged out");
    do {} while (a === false);
    //alert("logged out");
    return (
      <div>
        <Navbar dummyProb={dummyProp} />
        <Redirect to='/'  />
      </div>
    )
  

}

export default SignOut;
