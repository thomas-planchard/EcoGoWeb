// src/pages/HomePage.ts
import styled from 'styled-components';
import { Modal, Timeline as AntTimeline } from 'antd';
import colors from '../../constants/colors';


interface SectionProps {
  bgColor: string;
  reverse: boolean;
  centered: boolean;
}

interface SectionContentProps {
  align: string;
}

interface SectionImageProps {
  height: string;
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
  shouldForwardProp: (prop) => prop !== 'bgColor' && prop !== 'reverse' && prop !== 'delay' && prop !== 'centered',
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

  ${({ centered }) =>
    centered &&
    `
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
  `}

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


export const HorizontalTimeline = styled(AntTimeline)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 10vh;
  width: 100%;

  .ant-timeline-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    min-width: 6vw;

    h3 {
      margin-top: 2vh;
      font-size: 3vh;
      color: ${colors.darkGrey};
    }

    p {
      font-size: 2vh;
      color: ${colors.lightGray};
      text-align: center;
    }

    img {
      width: 9vh;  
      height: auto;
      margin-bottom: 2vh;
    }

    .ant-timeline-item-head {
      background-color: ${colors.primaryGreen} !important;
      border-color: ${colors.primaryGreen} !important;
    }

    /* Hide the green dot */
    .ant-timeline-item-head {
      display: none;
    }
  }

  /* Line between the timeline items */
  .ant-timeline-item-tail {
    height: 0px;
    background-color: ${colors.primaryGreen};
  }

  /* For responsive design on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    .ant-timeline-item {
      min-width: 100%;
    }
  }
`;