import { useState, useEffect, useRef } from 'react';
import colors from '../../constants/colors.ts';
import promoVideo from '../../assets/video.mp4';
import firstSection from '../../assets/globalWarming.jpg';
import secondSection from '../../assets/ecosystem.jpg';
import HeaderComponent from '../../components/Header.tsx';
import FooterComponent from '../../components/Footer.tsx';
import hammerAndWrench from '../../assets/icons/hammer.png';
import iphone from '../../assets/icons/iphone.png';
import newFeatures from '../../assets/icons/newFeatures.png';
import rocket from '../../assets/icons/rocket.png';
import {AppLayout} from '../../GlobalStyle.ts';
import leaf from '../../assets/leaf.svg';

import {
  FullScreenVideo,
  TextOverlay,
  ArrowContainer,
  ScrollDownArrow,
  SectionContainer,
  SectionContent,
  SectionImage,
  HorizontalTimeline,
  LeafContainer,
} from './HomePage.ts';
import { useIsMobile } from '../../hook/isMobile.tsx';




function HomePage() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const isMobile = useIsMobile();

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
        <HeaderComponent transparent={isHeaderTransparent} />
  
        {/* Full-screen video, adjusted for mobile if needed */}
        <FullScreenVideo>
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{ pointerEvents: 'none' }}
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          {/* Text Overlay */}
          <TextOverlay>
            <h1 className="whiteTitle">
              Measure Your Impact, <br />
              <span className="greenTitle">Make a Difference</span>
            </h1>
            <p className="text">
              Millions of people want to reduce their carbon footprint, but don’t know where to start. EcoGo makes personal climate action accessible, empowering everyone to take control of their impact and be part of the solution.
            </p>
          </TextOverlay>
          <ArrowContainer>
            <ScrollDownArrow onClick={handleScrollArrowClick}>&#x2193;</ScrollDownArrow>
          </ArrowContainer>
        </FullScreenVideo>
  
        {/* Leaf Container - Hide on mobile */}
        {!isMobile && (
          <LeafContainer>
            <img src={leaf} alt="Leaf" />
          </LeafContainer>
        )}
  
        {/* Section 1: Problem */}
        <SectionContainer
          centered={false}
          reverse={!isMobile} // Reverse only on desktop
          bgColor=""
          ref={sectionRefs[0]}
          className={useIntersectionObserver(sectionRefs[0]) ? 'show' : ''}
        >
          <SectionContent align="left">
            <h2>The Problem</h2>
            <p>
              As the planet warms and ecosystems are disrupted, our everyday actions contribute to the problem, and
              <span style={{ color: colors.softMint }}> transportation is a major culprit</span>. Transportation accounts for nearly{' '}
              <span style={{ color: colors.softMint }}>24% of global CO2 emissions</span>. Changing our habits can make a significant impact.
            </p>
          </SectionContent>
          <SectionImage height={isMobile ? '60%' : '80%'}>
            <img src={firstSection} alt="Problem" style={{ zIndex: 0 }} />
          </SectionImage>
        </SectionContainer>
  
        {/* Section 2: Solution */}
        <SectionContainer
          centered={false}
          reverse={false}
          bgColor=""
          ref={sectionRefs[1]}
          className={useIntersectionObserver(sectionRefs[1]) ? 'show' : ''}
        >
          <SectionContent align="right">
            <h2>Our Solution</h2>
            <p>
              <span style={{ color: colors.softMint }}>EcoGo is a smart mobile app</span> that empowers you to track, reduce, and visualize your carbon footprint in real-time. Whether walking, cycling, or driving, EcoGo helps you build eco-conscious habits in one easy-to-use platform.
            </p>
          </SectionContent>
          <SectionImage height={isMobile ? '70%' : '100%'}>
            <img src={secondSection} alt="Solution" />
          </SectionImage>
        </SectionContainer>
  
        {/* Section 3: Story with Timeline */}
        <SectionContainer centered reverse={false} bgColor="" ref={sectionRefs[2]} className={useIntersectionObserver(sectionRefs[2]) ? 'show' : ''}>
          <SectionContent align="center" style={{ width: '100%' }}>
            <h2 style={{ color: colors.primaryGreen }}>Our Story</h2>
  
            {/* Horizontal Timeline */}
            <HorizontalTimeline>
              <HorizontalTimeline.Item dot={null}>
                <img src={hammerAndWrench} alt="Prototype" />
                <h3>May 2024</h3>
                <p>First prototype with carbon footprint calculation.</p>
              </HorizontalTimeline.Item>
              <HorizontalTimeline.Item dot={null}>
                <img src={iphone} alt="Release" />
                <h3>Sep 2024</h3>
                <p>First app release to users.</p>
              </HorizontalTimeline.Item>
              <HorizontalTimeline.Item dot={null}>
                <img src={newFeatures} alt="Features" />
                <h3>Jan 2025</h3>
                <p>New features: food and vehicle tracking.</p>
              </HorizontalTimeline.Item>
              <HorizontalTimeline.Item dot={null}>
                <img src={rocket} alt="Version 2" />
                <h3>Sep 2025</h3>
                <p>Version 2 with enhanced features.</p>
              </HorizontalTimeline.Item>
            </HorizontalTimeline>
          </SectionContent>
        </SectionContainer>
  
        <FooterComponent />
      </AppLayout>
    );
  }

export default HomePage;