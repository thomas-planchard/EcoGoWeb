import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Modal } from 'antd';
import colors from '../../constants/colors.ts';
import logo from '../../assets/logo.webp';
import logoWhite from '../../assets/logoWhite.webp';
import promoVideo from '../../assets/video.mp4';
import Qrcode from '../../assets/qrCode.svg';

import {
  FullScreenVideo,
  TextOverlay,
  ArrowContainer,
  ScrollDownArrow,
  ContentWrapper,
  CustomHeader,
  LogoContainer,
  MenuContainer,
  RightButton,
} from './LandingPageComponents.ts';




function LandingPage() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsHeaderTransparent(false);
    } else {
      setIsHeaderTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollArrowClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Handle modal visibility
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      {/* Full-screen video */}
      <FullScreenVideo>
        <video autoPlay muted loop>
          <source src={promoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay on top of the video */}
        <TextOverlay>
          <h1 style={{ fontSize: '5rem', color: 'white', fontWeight: 'bold' }}>Measure Your Impact, <br /><span style={{ fontSize: '5rem', color: colors.strongMint }}>Make a Difference</span></h1>
          <p style={{ fontSize: '1.6rem', color: 'white' }}>
          Millions of people want to reduce their carbon footprint, but don’t know where to start. We created EcoGo to make personal climate action simple and accessible, empowering everyone to take control of their environmental impact and be a part of the solution.
          </p>
        </TextOverlay>
        <ArrowContainer>
         <ScrollDownArrow onClick={handleScrollArrowClick}>
          &#x2193;
         </ScrollDownArrow>
        </ArrowContainer>
      </FullScreenVideo>

      {/* Header with transparent background until scroll */}
      <CustomHeader transparent={isHeaderTransparent}>
        <LogoContainer>
          <img src={isHeaderTransparent ? logoWhite : logo} alt="Logo" style={{height: '4rem'}}/>
          <Link to="/"></Link>
        </LogoContainer>

        {/* Centered Menu */}
        <MenuContainer
          transparent={isHeaderTransparent}
          theme="dark"
          mode="horizontal"
          items={[
            { key: '1', label: <Link to="/about">About</Link> },
            { key: '2', label: <Link to="/services">Portfolio</Link> },
            { key: '3', label: <Link to="/contact">Team</Link> },
          ]}
        />

        {/* Button on the right */}
        <RightButton onClick={showModal}>Download</RightButton> {/* Trigger modal */}
      </CustomHeader>

           {/* Modal for QR Code */}
        <Modal
          title="Scan to Access the Project"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} 
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="fr.qr-code-generator.com/?gclid=Cj0KCQjwjNS3BhChARIsAOxBM6oZx8AgYDNB1XKZlFkJvwUq-avokqwlb0cnpx1bW--SPJiL2L_pH9kaAsFgEALw_wcB&campaignid=20806600009&adgroupid=&cpid=d7190422-d50c-4927-a14c-11da7155c34a&gad_source=1" rel="nofollow">
          <img src={Qrcode} style={{height: '20rem'}}></img>
          </a>
          </div>
        </Modal>
      <ContentWrapper>
        <h1 style={{ fontSize: '3rem', color: colors.lightGray }}>Welcome to Our Company</h1>
        <p style={{ fontSize: '1.2rem', color: colors.lightGray }}>
          Discover our services and what we can offer you!
        </p>
      </ContentWrapper>
    </Layout>
  );
}

export default LandingPage;