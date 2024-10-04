import { useState, useEffect, useRef } from 'react';
import colors from '../../constants/colors.ts';
import promoVideo from '../../assets/video.mp4';
import Qrcode from '../../assets/qrCode.svg';
import firstSection from '../../assets/globalWarming.jpg';
import secondSection from '../../assets/ecosystem.jpg';
import HeaderComponent from '../../components/Header.tsx';
import hammerAndWrench from '../../assets/hammer.png';
import iphone from '../../assets/iphone.png';
import newFeatures from '../../assets/newFeatures.png';
import rocket from '../../assets/rocket.png';
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
        <SectionContent align="center" style={{width: '100%'}}>
        <h2 style={{ color: colors.primaryGreen }}>Our Story</h2>

         {/* Horizontal Timeline */}
         <HorizontalTimeline>
            <HorizontalTimeline.Item dot={null}>
              <img src={hammerAndWrench} alt="Placeholder Logo 2" />
              <h3>May 2024</h3>
              <p>First prototype of the app with the initial system for carbon footprint calculation.</p>
            </HorizontalTimeline.Item>

            <HorizontalTimeline.Item dot={null}>
              <img src={iphone} alt="Placeholder Logo 3" />
              <h3>Sep 2024</h3>
              <p>First release of the app to users.</p>
            </HorizontalTimeline.Item>

            <HorizontalTimeline.Item dot={null}>
              <img src={newFeatures} alt="Placeholder Logo 4"  />
              <h3>Jan 2025</h3>
              <p>Added new features: track food and vehicle information based on car ID.</p>
            </HorizontalTimeline.Item>

            <HorizontalTimeline.Item dot={null}>
              <img src={rocket} alt="Placeholder Logo 5"  />
              <h3>Sep 2025</h3>
              <p>Release of version 2 with improved features and performance.</p>
            </HorizontalTimeline.Item>
          </HorizontalTimeline>

        </SectionContent>
      </SectionContainer>
          
    </AppLayout>
  );
}

export default HomePage;