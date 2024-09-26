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
  CustomHeader,
  LogoContainer,
  MenuContainer,
  RightButton,
} from './HomePage.ts';




function HomePage() {
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
        <video 
          autoPlay 
          muted 
          loop
          playsInline  // Prevents fullscreen on iOS Safari
          disablePictureInPicture  // Disable picture-in-picture mode on mobile
          onContextMenu={(e) => e.preventDefault()}  // Prevent right-click context menu
          style={{ pointerEvents: 'none' }}  // Prevent interaction on the video
          >
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
          <a href="https://github.com/thomas-planchard/moonshotProject" rel="nofollow">
          <img src={Qrcode} style={{height: '20rem'}}></img>
          </a>
          </div>
        </Modal>
        {/* Section 1: Problem */}
        <section style={{ display: 'flex', flexDirection: 'row-reverse', padding: '5rem 2rem', backgroundColor: colors.veryLightBrown}}>
          <div style={{ width: '50%', padding: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', color: colors.darkGrey }}>The Problem</h2>
            <p style={{ fontSize: '1.5rem', color: colors.softMint }}>
              Millions of people want to reduce their carbon footprint but don’t know where to start. This uncertainty leads to inaction, and that’s where we step in.
            </p>
          </div>
          <div style={{ width: '50%', padding: '2rem' }}>
            <img src="https://via.placeholder.com/500x300" alt="Problem" style={{ width: '100%' }} />
          </div>
        </section>

        {/* Section 2: Solution */}
        <section style={{ display: 'flex', padding: '5rem 2rem', backgroundColor: colors.veryLightBrown }}>
          <div style={{ width: '50%', padding: '2rem', textAlign: 'right' }}>
            <h2 style={{ fontSize: '3rem', color: colors.darkGrey }}>Our Solution</h2>
            <p style={{ fontSize: '1.5rem', color: colors.softMint }}>
              EcoGo provides an easy-to-use platform for individuals to calculate, monitor, and reduce their carbon footprint, offering actionable insights and sustainable solutions.
            </p>
          </div>
          <div style={{ width: '50%', padding: '2rem' }}>
            <img src="https://via.placeholder.com/500x300" alt="Solution" style={{ width: '100%' }} />
          </div>
        </section>

        {/* Section 3: Story with Timeline */}
        <section style={{ padding: '5rem 2rem', backgroundColor: colors.veryLightBrown }}>
          <h2 style={{ fontSize: '3rem', textAlign: 'center', color: colors.primaryGreen }}>Our Story</h2>
          <div style={{ margin: '4rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ul style={{ listStyle: 'none', padding: '0', width: '60%' }}>
              <li style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '1rem', fontWeight: 'bold', color: colors.primaryGreen }}>2020</div>
                <div>EcoGo was conceptualized as a solution to empower individuals to take control of their environmental impact.</div>
              </li>
              <li style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '1rem', fontWeight: 'bold', color: colors.primaryGreen }}>2021</div>
                <div>We launched the first version of the app, helping early adopters measure their carbon footprint.</div>
              </li>
              <li style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '1rem', fontWeight: 'bold', color: colors.primaryGreen }}>2022</div>
                <div>Expanded features to include personalized action plans for sustainable living.</div>
              </li>
              <li style={{ padding: '1rem 0', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '1rem', fontWeight: 'bold', color: colors.primaryGreen }}>2023</div>
                <div>Our community reached 1 million users, each making a difference in their way.</div>
              </li>
            </ul>
          </div>
        </section>
          
    </Layout>
  );
}

export default HomePage;