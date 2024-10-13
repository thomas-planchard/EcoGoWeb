import React, { useRef, useEffect } from 'react';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';
import image3D1 from '../../assets/3dmodel1.svg';
import image3D2 from '../../assets/3dmodel2.svg';
import image3D3 from '../../assets/3dmodel3.svg';
import image3D4 from '../../assets/3dmodel4.svg';
import image3D5 from '../../assets/3dmodel5.svg';
import image3D6 from '../../assets/3dmodel6.svg';
import image3D7 from '../../assets/3dmodel7.svg';
import { HeroSection, HorizontalGallery, GalleryItem, Description, FeaturesSection, FeatureItem, FeatureImage, FeatureText, LastSection } from './AboutStyle';
import FooterComponent from '../../components/Footer';

const AboutPage = () => {

  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
  
    const scrollWidth = gallery.scrollWidth;  // Get the scroll width
    let start: number;
    const speed = 0.5;  // Speed of the scroll
  
    const scroll = () => {
      // If gallery scrollLeft exceeds half the scrollWidth (since we duplicate content)
      if (gallery.scrollLeft >= scrollWidth / 2) {
        gallery.scrollLeft = 0;  // Reset to the start
      }
      
      gallery.scrollLeft += speed;  // Move the scroll
      console.log(gallery.scrollLeft);  
      start = requestAnimationFrame(scroll);  // Continue the animation
    };
  
    start = requestAnimationFrame(scroll);  // Start scrolling
  
    return () => cancelAnimationFrame(start);  // Clean up on component unmount
  }, []);

  
  return (
    <AppLayout>
      <HeaderComponent transparent={false}/>
      <HeroSection>
        <h1>Discover How Our App Works</h1>
        <p>Meet your future assistant for tracking your carbon footprint</p>
      </HeroSection>

      <HorizontalGallery ref={galleryRef}>
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          <GalleryItem>
            <img src={image3D1} alt="Screenshot 1" />
            <Description>
              <h2>Track Your Activities</h2>
              <p>Track daily activities and gain insights into your routine</p>
            </Description>
          </GalleryItem>
          <GalleryItem>
            <img src={image3D2} alt="Screenshot 2" />
            <Description>
              <h2>Real-Time Statistics</h2>
              <p>Monitor your weekly carbon footprint with detailed charts and insights</p>
            </Description>
          </GalleryItem>
          <GalleryItem>
            <img src={image3D7} alt="Screenshot 3" />
            <Description>
              <h2>Spend Your Coins with Partners</h2>
              <p>Redeem the coins you’ve earned from your efforts at our partner shops</p>
            </Description>
          </GalleryItem>
          <GalleryItem>
            <img src={image3D6} alt="Screenshot 4" />
            <Description>
              <h2>Your Tracker During Your Trip</h2>
              <p>Track your carbon footprint live on your next trip</p>
            </Description>
          </GalleryItem>
        </React.Fragment>
      ))}
      </HorizontalGallery>

      <FeaturesSection>
        <FeatureItem>
          <FeatureImage src={image3D3} alt="Feature 1" />
          <FeatureText>
            <h2>Detailed Analytics</h2>
            <p>Analyze your data in depth to make better decisions.</p>
          </FeatureText>
        </FeatureItem>
        <FeatureItem reverse>
          <FeatureImage src={image3D4} alt="Feature 2" />
          <FeatureText>
            <h2>Seamless Integration</h2>
            <p>Integrate effortlessly with your daily workflow.</p>
          </FeatureText>
        </FeatureItem>
      </FeaturesSection>
      <LastSection>
        <img src={image3D5} alt="Last Section Image" />
        <p>This is the last section with a picture in the middle and text below it.</p>
      </LastSection>
      <FooterComponent />
    </AppLayout>
  );
};

export default AboutPage;