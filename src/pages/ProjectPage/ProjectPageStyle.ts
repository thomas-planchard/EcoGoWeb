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
  justify-content: space-between;
  gap: 12rem;
  text-align: left;
  margin: 2.5rem 0;
`;

const InfoItem = styled.div`
  flex: 1;
  padding: 0 0.625rem;
  color: #333;

  & > h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.primaryGreen};
    text-transform: uppercase;
  }

  & > p, & > a {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }

  & > a {
    color: #333;
    text-decoration: underline;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;

  & > img {
    max-width: 100%;
    border-radius: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.primaryGreen};
  margin: 2.5rem 0 1.25rem;
`;

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

const List = styled.ul`
  margin: 1.25rem 0;
  padding-left: 1.25rem;
  color: #666;
  line-height: 1.8;

  & > li {
    margin-bottom: 0.625rem;
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
  SectionTitle,
  SectionContent,
  List,
};