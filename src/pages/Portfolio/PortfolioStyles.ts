import styled from 'styled-components';
import colors from '../../constants/colors';
import { Link } from 'react-router-dom';

const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const PortfolioTitle = styled.h1`
  font-size: 3rem;
  color: black;
  margin-bottom: 3rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 3rem; /* Space between cards */
  max-width: 1200px;
  margin: 0 auto;
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 60%; /* Aspect ratio for the image container */
  overflow: hidden;
  border-radius: 12px 12px 0 0; /* Rounded corners at the top */

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
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${colors.darkGrey};
`;

const ProjectDescription = styled.p`
  color: grey;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;



export { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard, ImageContainer, CardText, ProjectTitle, ProjectDescription, ReadMore };