import styled from 'styled-components';
import  colors  from '../../constants/colors';
import { Link } from 'react-router-dom';



// Styled Components for Portfolio
const PortfolioSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const PortfolioTitle = styled.h1`
  font-size: 5rem;
  color: black;
  margin-bottom: 2rem;
`;

const PortfolioGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PortfolioCard = styled(Link)`
  background-color: #f8f9fa;
  padding: 2rem;
  width: 45%;
  border-radius: 10px;
  text-align: left;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 20%;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.darkGrey};
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .read-more {
    font-weight: bold;
    color: ${colors.primaryGreen};
    font-size: 1.1rem;
    text-decoration: none;
  }

  &:hover .read-more {
    color: ${colors.darkTeal};
  }
`;


export { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard };