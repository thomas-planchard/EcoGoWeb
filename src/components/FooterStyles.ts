import styled from 'styled-components';
import colors from '../constants/colors';

export const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  color: #333;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
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
    margin-bottom: 1.5rem;
  }
`;

export const LogoSection = styled.div`
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 15vh;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    img {
      width: 12vh;
    }
  }
`;

export const PagesSection = styled.div`
  flex: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 1rem;

      a {
        text-decoration: none;
        font-size: 2vh;
        color: #333;

        &:hover {
          color: ${colors.primaryGreen}; 
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;

    h4 {
      font-size: 2.5vh;
    }

    ul li a {
      font-size: 2vh;
    }
  }
`;

export const UtilitySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 1rem;

      a {
        text-decoration: none;
        font-size: 2vh;
        color: #333;

        &:hover {
          color: ${colors.primaryGreen}; 
        }
      }
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 2.5vh;
    }

    ul li a {
      font-size: 2vh;
    }
  }
`;

export const ContactSection = styled.div`
  flex: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 3vh;
  }

  p {
    font-size: 2vh;
    margin-bottom: 1rem;

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: ${colors.primaryGreen}; 
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;

    h4 {
      font-size: 2.5vh;
    }

    p {
      font-size: 2vh;
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: 1.2rem;
    color: #333;

    &:hover {
      color: ${colors.primaryGreen};
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

    a {
      font-size: 1rem;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #eaeaea;
  padding: 1rem 0;

  p {
    margin: 0.5rem 0;
    font-size: 1.5vh;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5vh;
    padding: 1rem 0;
  }
`;