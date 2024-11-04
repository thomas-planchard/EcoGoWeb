import styled from 'styled-components';
import  colors  from '../../constants/colors';
import { Link } from 'react-router-dom';



const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const PortfolioTitle = styled.h1`
  font-size: 3rem;
  color: ${colors.darkGrey};
  margin-bottom: 3rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 3rem; /* Space between cards */
  max-width: 1200px;
  margin: 0 auto;
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
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 60%; /* Aspect ratio for the image container */
  border-radius: 12px 12px 0 0; /* Rounded corners at the top */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; 
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
  color: ${colors.grey};
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.span`
  font-weight: bold;
  color: ${colors.primary};
  font-size: 1.1rem;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primaryDark};
  }
`;

export { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard, ImageContainer, CardText, ProjectTitle, ProjectDescription, ReadMore };