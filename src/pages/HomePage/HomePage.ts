// src/pages/HomePage.ts
import styled from 'styled-components';
import { Layout, Menu, Button, Modal } from 'antd';
import colors from '../../constants/colors';


interface TransparentProps {
  transparent: boolean;
}

interface SectionProps {
  bgColor: string;
  reverse: boolean;
}

interface SectionContentProps {
  align: string;
}

interface SectionImageProps {
  height: string;
}

export const AppLayout = styled(Layout)`
  background-color: ${colors.veryLightBrown};};
`;


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

  .whiteTitle {
  font-size: 9vh ;
  color: white ; 
  font-weight: bold;
  }

  .greenTitle {
  font-size: 9vh ;
  color: ${colors.strongMint} ; 
  font-weight: bold;
  }

  .text {
  font-size: 3vh ;
  color: white ;
  }
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
  font-size: 10vh;
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
  z-index: 2;
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

  img {
    height: 7vh;
  }
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
    padding: 0 1.3vw;
    margin: 0 1.3vw;
    font-size: 3vh;  
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
    border-bottom: 0.2vh solid ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};  /* Bottom border on hover */
  }

  /* Selected (active) state */
  .ant-menu-item-selected {
    border-bottom: 0.2vh solid ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};  /* Bottom border when selected */
  }

  /* Remove default underline effect */
  .ant-menu-item::after {
    content: none !important;
  }
`;

export const RightButton = styled(Button)`
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 1vw;


   &:hover {
    background-color: ${colors.softMint} !important;
    color: white !important;
    border-color: ${colors.softMint} !important;
  }
`;

export const ModalContainer = styled(Modal)`
  .qrCodeContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 60%;
  }
`;


// Base container for a section
export const SectionContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'reverse' && prop !== 'delay',
  })<SectionProps>`
  display: flex;
  padding: 5vh 2vw;
  background-color: ${({ bgColor }) => bgColor || colors.veryLightBrown}; /* Optional background color */
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')}; /* Handle reverse layout */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
    animation: slideUp 1s forwards;
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(100px); /* Start from below */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* End in normal position */
    }
  }

  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3vw 1vw;
  }
`;

// Content container (text area)
export const SectionContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'align',
  })<SectionContentProps>`
  width: 50%;
  padding: 2vw;
  text-align: ${({ align }) => align || 'left'}; /* Customizable text alignment */
  
  h2 {
    font-size: 6vh;
    color: ${colors.darkGrey};
  }
  
  p {
    font-size: 3vh;
    color: ${colors.lightGray};
    line-height: 2.0;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// Image container
export const SectionImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'height',
  })<SectionImageProps>`

  width: 50%;
  padding: 2vw;

  img {
    width: 100%;
    height: ${({ height }) => height || 'auto'}; /* Customizable height */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;