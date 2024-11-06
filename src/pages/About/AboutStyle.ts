import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background: #f9f9f9;
  margin-top: 4rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const HorizontalGallery = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 2rem;
  gap: 2rem;
  white-space: nowrap;

  & > * {
    display: inline-block; 
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const GalleryItem = styled.div`
  min-width: 20vw;
  flex-shrink: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    min-width: 50vw;
  }
`;

const Description = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const FeatureItem = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FeatureImage = styled.img`
  flex: 1;
  max-width: 30vw;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 70vw;
  }
`;

const FeatureText = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.5rem;
    width: 60%; 
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;

const LastSection = styled.section`
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    height: auto;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    width: 50%;
    color: #666;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
    }

    p {
      font-size: 1rem;
      width: 90%;
    }
  }
`;

export { HeroSection, HorizontalGallery, GalleryItem, Description, FeaturesSection, FeatureItem, FeatureImage, FeatureText, LastSection };