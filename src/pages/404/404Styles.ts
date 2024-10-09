import styled from 'styled-components';
import colors from '../../constants/colors';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f8fc;
`;

export const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 4vh;
  padding: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  img {
    width: 100%;
    max-width: 250px;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: #111;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  h2 {
    font-size: 6vh;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
    font-family: 'Poppins', sans-serif;
  }
`;

export const HomeButton = styled.a`
  display: inline-block;
  padding: 1.8rem 3.5rem;
  background-color: #000;
  color: #fff;
  border-radius: 4vh;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffff;
    color: ${colors.primaryGreen};
  }
`;