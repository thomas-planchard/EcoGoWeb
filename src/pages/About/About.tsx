import React ,{ useRef, useEffect } from 'react';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';
import image3D1 from '../../assets/3dmodels/3dmodel1.svg';
import image3D2 from '../../assets/3dmodels/3dmodel2.svg';
import image3D3 from '../../assets/3dmodels/3dmodel3.svg';
import image3D5 from '../../assets/3dmodels/3dmodel5.svg';
import image3D6 from '../../assets/3dmodels/3dmodel6.svg';
import image3D7 from '../../assets/3dmodels/3dmodel7.svg';
import image3D8 from '../../assets/3dmodels/3dmodel8.svg';
import { HeroSection, HorizontalGallery, GalleryItem, Description, FeaturesSection, FeatureItem, FeatureImage, FeatureText, LastSection } from './AboutStyle';
import FooterComponent from '../../components/Footer';

const AboutPage = () => {

  const firstGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = firstGalleryRef.current;
    if (!gallery) return;
  
    const speed = 1.5;  // Increase speed for visibility
    let requestId: number;
  
    const scrollWidth = gallery.scrollWidth;  // Get the scroll width
  
    const scroll = () => {
  
      // Reset scroll when it reaches the halfway point
      if (gallery.scrollLeft >= scrollWidth / 2) {
        gallery.scrollLeft = 0;  // Reset to start
      }

    
  
      // Move the scroll
      gallery.scrollLeft += speed;

      // Recursive call to requestAnimationFrame
      requestId = requestAnimationFrame(scroll);
    };
  
    // Start the scrolling
    requestId = requestAnimationFrame(scroll);
  
    // Cleanup the animation frame on component unmount
    return () => cancelAnimationFrame(requestId);
  }, []);


  
  return (
    <AppLayout>
      <HeaderComponent transparent={false}/>
      <HeroSection>
        <h1>Discover How Our App Works</h1>
        <p>Meet your future assistant for tracking your carbon footprint</p>
      </HeroSection>

      <HorizontalGallery ref={firstGalleryRef}>
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
            <p>The app lets you choose between four transportation modes: walking, cycling, driving, and public transport. For each mode, it calculates the carbon footprint you’ll emit, helping you easily compare the environmental impact of your choices.</p>
          </FeatureText>
        </FeatureItem>
        <FeatureItem reverse={true}>
          <FeatureImage src={image3D8} alt="Feature 2" />
          <FeatureText>
            <h2>Automatic Detection</h2>
            <p>The app automatically detects your activity—whether you’re walking, cycling, driving, or using public transport—and records your carbon emissions without needing you to manually input data. Your transportation modes are tracked and added to your account seamlessly.</p>
          </FeatureText>
        </FeatureItem>
      </FeaturesSection>
      
      <LastSection>
        <img src={image3D5} alt="Last Section Image" />
        <p>A comprehensive solution to help you track your carbon footprint during your daily commutes. By making you aware of your actual emissions, the app empowers you to make informed and eco-conscious decisions in your everyday travel.</p>
      </LastSection>
      <FooterComponent />
    </AppLayout>
  );
};

export default AboutPage;