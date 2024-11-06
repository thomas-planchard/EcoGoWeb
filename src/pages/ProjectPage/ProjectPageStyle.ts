import styled from 'styled-components';
import colors from '../../constants/colors';

const PageContainer = styled.div`
  max-width: 100%;
  margin-top: 5rem;
  color: #333;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const HeaderSection = styled.section`
  width: 80%;
  margin-top: 2.5rem;
  text-align: left;
  padding: 2.5rem 0;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${colors.primaryGreen};
  margin-bottom: 0.625rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #888;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InfoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 6.25rem;
  text-align: left;
  margin: 2.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
    align-items: center;
    width: 100%;
  }
`;

const InfoItem = styled.div`
  flex: 1;
  max-width: 16%;
  padding: 0 0.625rem;
  color: #666;

  & > h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.primaryGreen};
    text-transform: uppercase;
  }

  & > p, & > a {
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }

  & > a {
    color: ${colors.primaryGreen};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: center;

    & > h3 {
      font-size: 1rem;
    }

    & > p, & > a {
      font-size: 0.9rem;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;

  & > img {
    max-width: 70%;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    & > img {
      max-width: 90%;
    }
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7.5rem 0;
  max-width: 70%;
  margin-top: 3rem;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 0;
    width: 90%;
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  flex: 0 0 40%;
  font-size: 2.5rem;
  color: ${colors.primaryGreen};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SectionContent = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  word-wrap: break-word;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    text-align: justify;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SectionImage = styled.img`
  max-width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export {
  PageContainer,
  HeaderSection,
  Title,
  Subtitle,
  InfoGrid,
  InfoItem,
  ImageSection,
  SectionWrapper,
  SectionTitle,
  SectionContent,
  SectionImage,
};