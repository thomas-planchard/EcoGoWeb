import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 
import {
  FooterContainer,
  FooterTop,
  LogoSection,
  SocialIcons,
  PagesSection,
  UtilitySection,
  ContactSection,
  FooterBottom
}
from './FooterStyles.ts';

function FooterComponent() {
  return (
    <FooterContainer>
      <FooterTop>
        {/* Logo and Description */}
        <LogoSection>
          <img src={logo} alt="Company Logo" />
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/thomas-planchard-461782221/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </SocialIcons>
        </LogoSection>

        {/* Pages Links */}
        <PagesSection>
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
          </ul>
        </PagesSection>

        {/* Contact Info */}
        <ContactSection>
          <h4>Contact Me</h4>
          <p>Email: <a href="mailto:thomas.planchard@icloud.com">thomas.planchard@icloud.com</a></p>
          <p>Phone: <a href="tel:+33610848255">06 10 84 82 55</a></p>
        </ContactSection>
      </FooterTop>

      <FooterBottom>
        <p>Copyright © 2024 EcoGo. Designed by Thomas Planchard</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default FooterComponent;