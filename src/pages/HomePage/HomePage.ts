// src/pages/LandingPageStyles.js
import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';
import colors from '../../constants/colors';


interface TransparentProps {
  transparent: boolean;
}

// Styled component for the full-screen video
export const FullScreenVideo = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    margin: 0;
  }
`;

// Text overlay container
export const TextOverlay = styled.div`
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* Center the text */
  text-align: center;  /* Center the text */
  z-index: 2;  /* Ensure the text is above the video */
`;

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ScrollDownArrow = styled.div`
  font-size: 5rem;
  color: white;
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;



export const CustomHeader = styled(Layout.Header).withConfig({
  shouldForwardProp: (prop) => prop !== 'transparent',
})<TransparentProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  background-color: ${({ transparent }) => (transparent ? 'transparent' : 'white')};
  border-bottom: ${({ transparent }) => (transparent ? 'none' : `1px solid ${colors.lightGray}`)};
  padding: 3rem 6rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;



export const MenuContainer = styled(Menu).withConfig({
  shouldForwardProp: (prop) => prop !== 'transparent',
})<TransparentProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;

  .ant-menu-item {
    padding: 0 1rem;
    margin: 0 1rem;
    font-size: 1.4rem;  
    transition: color 0.3s ease; /* Smooth color transition */

    a {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)}; /* Default color */
    }

    a:hover, a:focus {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)} ; /* Hover color */
    }

    a:active, a:visited {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)} ; /* Active/Visited color */
    }
  }

  /* Hover state */
  .ant-menu-item:hover {
    border-bottom: 0.1rem solid ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};  /* Bottom border on hover */
  }

  /* Selected (active) state */
  .ant-menu-item-selected {
    border-bottom: 0.1rem solid ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};  /* Bottom border when selected */
  }

  /* Remove default underline effect */
  .ant-menu-item::after {
    content: none !important;
  }
`;

export const RightButton = styled(Button)`
  background-color: white
  color: black;
  borderColor: black;
  font-weight: bold;
`;