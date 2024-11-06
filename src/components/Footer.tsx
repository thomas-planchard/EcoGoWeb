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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
            <li><Link to="/Team">Team</Link></li>
          </ul>
        </PagesSection>

        {/* Utility Links */}
        <UtilitySection>
          <h4>Utility Pages</h4>
          <ul>
            <li><Link to="/404">404 Not Found</Link></li>
            <li><Link to="/licenses">Licenses</Link></li>
            <li><Link to="/changelog">Changelog</Link></li>
          </ul>
        </UtilitySection>

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