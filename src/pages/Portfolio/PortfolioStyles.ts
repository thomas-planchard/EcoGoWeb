import styled from 'styled-components';
import colors from '../../constants/colors';
import { Link } from 'react-router-dom';

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PortfolioTitle = styled.h1`
  font-size: 3rem;
  color: black;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 3rem; /* Space between cards */
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    gap: 2rem;
  }
`;

const ReadMore = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  transition: color 0.3s ease;
`;

const PortfolioCard = styled(Link)`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

    ${ReadMore} {
      color: ${colors.primaryGreen};
    }
  }

  @media (max-width: 768px) {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Reduced shadow for mobile */
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Aspect ratio for the image container */
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: inherit;
  }
`;

const CardText = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${colors.darkGrey};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: grey;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard, ImageContainer, CardText, ProjectTitle, ProjectDescription, ReadMore };