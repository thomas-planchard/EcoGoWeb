import { useState, useEffect, useRef } from 'react';
import colors from '../../constants/colors.ts';
import promoVideo from '../../assets/video.mp4';
import Qrcode from '../../assets/qrCode.svg';
import firstSection from '../../assets/globalWarming.jpg';
import secondSection from '../../assets/ecosystem.jpg';
import HeaderComponent from '../../components/Header.tsx';
import {AppLayout} from '../../GlobalStyle.ts';

import {
  FullScreenVideo,
  TextOverlay,
  ArrowContainer,
  ScrollDownArrow,
  ModalContainer,
  SectionContainer,
  SectionContent,
  SectionImage,
  HorizontalTimeline,
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
      {/* Header with transparent background until scroll */}
      <HeaderComponent transparent={isHeaderTransparent} />
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
      <SectionContainer centered={false} reverse bgColor=""  ref={sectionRefs[0]} className={useIntersectionObserver(sectionRefs[0]) ? 'show' : ''}>
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
      <SectionContainer centered={false} reverse={false} bgColor="" ref={sectionRefs[1]} className={useIntersectionObserver(sectionRefs[1]) ? 'show' : ''}>
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
      <SectionContainer  centered reverse={false} bgColor="" ref={sectionRefs[2]} className={useIntersectionObserver(sectionRefs[2]) ? 'show' : ''}>
        <SectionContent align="center">
        <h2 style={{ color: colors.primaryGreen }}>Our Story</h2>

          {/* Horizontal Timeline */}
          <HorizontalTimeline>
            <HorizontalTimeline.Item>
              <h3 style={{ color: colors.primaryGreen }}>2020</h3>
              <p>EcoGo was conceptualized as a solution to empower individuals to take control of their environmental impact.</p>
            </HorizontalTimeline.Item>
            <HorizontalTimeline.Item>
              <h3 style={{ color: colors.primaryGreen }}>2021</h3>
              <p>We launched the first version of the app, helping early adopters measure their carbon footprint.</p>
            </HorizontalTimeline.Item>
            <HorizontalTimeline.Item>
              <h3 style={{ color: colors.primaryGreen }}>2022</h3>
              <p>Expanded features to include personalized action plans for sustainable living.</p>
            </HorizontalTimeline.Item>
            <HorizontalTimeline.Item>
              <h3 style={{ color: colors.primaryGreen }}>2023</h3>
              <p>Our community reached 1 million users, each making a difference in their way.</p>
            </HorizontalTimeline.Item>
          </HorizontalTimeline>
        </SectionContent>
      </SectionContainer>
          
    </AppLayout>
  );
}

export default HomePage;