import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaVimeoSquare
} from 'react-icons/fa';
import {
  HiOutlineMail
} from 'react-icons/hi';
import logo from '../../../images/AMIS.png';

function Footer() {
  const Mailto = ({ email, subject = '', body = '', children, className }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a class={className} href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className='footer-container'>

    {/*}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
  */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='//www.instagram.com/mcp.group'>Instagram</Link>
            <Link to='//facebook.com/ConsultingMCP'>Facebook</Link>
            <Link to='//twitter.com/ConsultingMCP'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='//www.theamisjourney.com' 
              className='social-logo'
              rel="icon">
              <img src={logo} width="100px"/>
            </Link>
          </div>
          <small className='website-rights'>
            <a className='website-rights' href="//www.mcpeurope.com">MCP Consulting Group Ltd</a>, <a className='website-rights' href="//www.korbconsulting.at">Korb Consulting KG</a> © 2021</small>
          <div className='social-icons'>
            <Mailto 
              className='social-icon-link'
              email="consultancy@mcpeurope.com" 
              subject="Contact request: AMIS" 
              body="Hello AMIS team!">
              <HiOutlineMail />
            </Mailto>
            
            <Link
              className='social-icon-link'
              to='//facebook.com/ConsultingMCP'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/mcp.group'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='//twitter.com/ConsultingMCP'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/groups/3962229/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
