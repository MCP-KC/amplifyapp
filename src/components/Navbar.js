import React, { useState, useEffect, useReducer, useLayoutEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from '../images/AMIS.png';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { I18n, Auth } from 'aws-amplify';
import { isArrayLiteralExpression } from 'typescript';
import {useBetween} from "use-between";
import {useShareableState} from "../useShareableState";
import Flag from 'react-flagkit';

const authScreenLabels = {
  'en': {
    'Password': "Password",
    'SIGN IN': "SIGN IN",
  },
  'de': {
    'Products': "Produkte",
    'Services': "Dienstleistungen",
    'SIGN IN': "ANMELDEN",
    'SIGN OUT': "ABMELDEN",
    'Home': "Startseite",
  }
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [countryCode, setCountryCode] = useState('GB');
  const [button, setButton] = useState(true);
  const [authState, setAuthState] = useState();
  const [authUser, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const { username, setUsername, count } = useBetween(useShareableState);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleLanguage = () => {
    countryCode=='GB' ? (setCountryCode('DE')):(setCountryCode('GB'));
    countryCode=='GB' ? (I18n.setLanguage('de')):(I18n.setLanguage('en'))
  }

  I18n.putVocabularies(authScreenLabels);
  //toggleLanguage();


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      Auth.currentAuthenticatedUser()
        .then(user1 => {
          setUsername(user1.username);

          //this.forceUpdate();
          //Navbar.forceUpdate()
        })  
        .catch(err => console.log(err));
    });
  }, []);

  useLayoutEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    }
  }, []);
/*
  Auth.currentAuthenticatedUser()
  .then(user1 => setUsername(user1.username))
  .catch(err => console.log(err));
*/

//alert(username);
  if (username != 'nobody') { 
   return (
   
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' 
              className='navbar-logo' 
              onClick={closeMobileMenu}
              rel="icon">
              <img src={logo} width="100px"/>
              
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {I18n.get('Home')}
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  {I18n.get('Services')}
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  {I18n.get('Products')}
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                                
                  <Link to='/sign-out' className='btn-link'>
                    <Button buttonStyle='btn--outline'>
                      
                    {I18n.get('SIGN OUT')}
                    </Button>
                  </Link>
                  
                ) : (
                  <Link to='/sign-out' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      {I18n.get('SIGN OUT')}
                    

                    </Button>
                  </Link>
                  
                )}
              </li>
              <li className='username'>
                {username}
              </li>
              <li className='username'>
              <Flag
                country={countryCode}
                role="button"
                onClick={() => {toggleLanguage()}}
                  
                />
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
   )
 } else {
  return (
   
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' 
            className='navbar-logo' 
            onClick={closeMobileMenu}
            rel="icon">
            <img src={logo} width="100px"/>
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              {I18n.get('Home')}
              </Link>
            </li>
 
            <li className='nav-btn'>
              {button ? (
                              
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'>
                    {I18n.get('SIGN IN')}
                  </Button>
                </Link>
                
              ) : (
                <Link to='/sign-up' className='btn-link'>
                  <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--mobile'
                    onClick={closeMobileMenu}
                  >
                    {I18n.get('SIGN IN')}

                  </Button>
                </Link>
                
              )}
            </li>
            <li className='username'>
              <Flag
                country={countryCode}
                role="button"
                onClick={() => {toggleLanguage()}}
                  
                />
              </li>
            
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
 )
}


  
}

export default Navbar;
