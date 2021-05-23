import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import '../../HeroSection.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../../aws-exports';
import { I18n, Auth } from 'aws-amplify';
import  { Redirect, Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import {useBetween} from "use-between"
import { isArrayLiteralExpression } from 'typescript';
import {useShareableState} from "../../../useShareableState";

function SignUp() {
  var lightBg=false;

  const authScreenLabels = {
    'en': {
      'Password': "Password",
        'Sign Up': "Create a new account",
        'Sign Up Account': "Create a new account",
        'Sign In': "Sign In",
        'Sign In Account': "Sign In Account"
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

  //const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const { username, setUsername} = useBetween(useShareableState);

  Amplify.configure(awsconfig);

/*
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
     
    });
  }, []);
*/

  I18n.putVocabularies(authScreenLabels);

  let dummyProp = Math.random();
 
  if (username !='nobody') {
    return(
      <div>
        <Redirect to='/'  />
      </div>
      )
  } else {
    return (
      <div className='home__hero-section darkBg'>

      <AmplifyAuthenticator >
        <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content"></div>
        </AmplifySignIn>
    </AmplifyAuthenticator>
       
      </div>
    )
  }
}

export default SignUp;
