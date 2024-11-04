import styled from 'styled-components';
import colors from '../constants/colors';


export const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  color: #333;
  padding: 2rem 3rem;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LogoSection = styled.div`
  flex: 1;
  max-width: 300px;

  img {
    width: 15vh;
    margin-bottom: 1rem;
  }
`;

export const PagesSection = styled.div`
  flex: 1;
  margin-left: 2rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;

  }
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1.5rem;
      a {
        text-decoration: none;
        font-size: 2vh;
        color: #333;

        &:hover {
          text-decoration: none;
          color: ${colors.primaryGreen}; 
        }
      }
    }
  }
`;

export const UtilitySection = styled.div`
  flex: 1;
  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;
  }
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1.5rem;
      a {
        text-decoration: none;
        font-size: 2vh;
        color: #333;
        &:hover {
          text-decoration: none;
          color: ${colors.primaryGreen}; 
        }
      }
    }
  }
`;

export const ContactSection = styled.div`
  flex: 1;
  margin-left: 2rem;
  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;
  }
  p {
    font-size: 2vh;
    margin-bottom: 1.5rem;

    a {
      text-decoration: none;
      color: #333;
      &:hover {
        text-decoration: none;
        color: ${colors.primaryGreen}; 
      }
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  a {
    margin-right: 1rem;
    font-size: 1.2rem;
    color: #333;
    &:hover {
      color: #50fa7b;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #eaeaea;
  height: 1vh;
  p {
    a {
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;