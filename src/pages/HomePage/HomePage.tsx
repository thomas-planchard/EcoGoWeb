import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors.ts';
import logo from '../../assets/logo.webp';
import logoWhite from '../../assets/logoWhite.webp';
import promoVideo from '../../assets/video.mp4';
import Qrcode from '../../assets/qrCode.svg';
import firstSection from '../../assets/globalWarming.jpg';
import secondSection from '../../assets/ecosystem.jpg';

import {
  AppLayout,
  FullScreenVideo,
  TextOverlay,
  ArrowContainer,
  ScrollDownArrow,
  CustomHeader,
  LogoContainer,
  MenuContainer,
  RightButton,
  ModalContainer,
  SectionContainer,
  SectionContent,
  SectionImage,
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

    // IntersectionObserver hook
    const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>) => {
      const [isVisible, setIsVisible] = useState(false);
  
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the visibility flag
            observer.disconnect(); // Disconnect after showing to avoid retrigger
          }
        });
  
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
  
        return () => observer.disconnect();
      }, [elementRef]);
  
      return isVisible;
    };
  
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  

  return (
    <AppLayout>
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
          <h1 className='whiteTitle'>Measure Your Impact, <br /><span className='greenTitle'>Make a Difference</span></h1>
          <p className='text'>
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
          <img src={isHeaderTransparent ? logoWhite : logo} alt="Logo"/>
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
        <ModalContainer
          title="Scan to Access the Project"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} 
        >
          <a className="qrCodeContainer" href="https://github.com/thomas-planchard/moonshotProject"rel="nofollow">
          <img src={Qrcode}></img>
          </a>
        </ModalContainer>
        {/* Section 1: Problem */}
      <SectionContainer reverse bgColor=""  ref={sectionRefs[0]} className={useIntersectionObserver(sectionRefs[0]) ? 'show' : ''}>
        <SectionContent align='left'>
          <h2>The Problem</h2>
          <p>
            As the planet warms and ecosystems are disrupted, our everyday actions contribute to the problem, and
            <span style={{color: colors.softMint}}> transportation is a major culprit</span>. According to the International Energy Agency (IEA), transportation
            accounts for nearly <span style={{color: colors.softMint}}>24% of global CO2 emissions</span>. What makes this issue pressing is that transportation is one of
            the easiest habits to change.
          </p>
        </SectionContent>
        <SectionImage height='80%'>
          <img src={firstSection} alt="Problem" />
        </SectionImage>
      </SectionContainer>

      {/* Section 2: Solution */}
      <SectionContainer reverse={false} bgColor="" ref={sectionRefs[1]} className={useIntersectionObserver(sectionRefs[1]) ? 'show' : ''}>
        <SectionContent align="right">
          <h2>Our Solution</h2>
          <p>
          <span style={{color: colors.softMint}}>EcoGo is a smart mobile app</span> that empowers you to track, reduce, and visualize your carbon footprint in real-time. Whether you’re walking, cycling, driving, or taking public transport, EcoGo calculates <span style={{color: colors.softMint}}>your environmental impact</span>, rewards sustainable choices, and helps you build eco-conscious habits—all in one engaging, easy-to-use platform.
          </p>
        </SectionContent>
        <SectionImage height='100%'>
          <img src={secondSection} alt="Solution" />
        </SectionImage>
      </SectionContainer>

      {/* Section 3: Story with Timeline */}
      <SectionContainer reverse={false} bgColor="" ref={sectionRefs[2]} className={useIntersectionObserver(sectionRefs[2]) ? 'show' : ''}>
        <SectionContent align="center">
          <h2 style={{ color: colors.primaryGreen }}>Our Story</h2>
          <ul style={{ listStyle: 'none', padding: '0', width: '60%', margin: 'auto' }}>
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
        </SectionContent>
      </SectionContainer>
          
    </AppLayout>
  );
}

export default HomePage;