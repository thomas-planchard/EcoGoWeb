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
`;

const HeaderSection = styled.section`
  width: 80%;
  margin-top: 2.5rem;
  text-align: left;
  padding: 2.5rem 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${colors.primaryGreen};
  margin-bottom: 0.625rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

const InfoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 6.25rem;
  text-align: left;
  margin: 2.5rem 0;
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
    color: #666;
    text-decoration: underline;
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
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7.5rem 0;
  max-width: 70%;
  margin-top: 3rem;
  border-bottom: 1px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  flex: 0 0 40%; /* Left column width */
  font-size: 2.5rem;
  color: ${colors.primaryGreen};
  margin: 0;
`;

const SectionContent = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  word-wrap: break-word;
  
  color: #666;
`;


const SectionImage = styled.img`
  max-width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
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