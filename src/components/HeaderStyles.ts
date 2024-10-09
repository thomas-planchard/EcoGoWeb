// src/components/HeaderStyles.ts
import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';
import colors from '../constants/colors';

interface TransparentProps {
  transparent: boolean;
}

// Styled component for the header
export const CustomHeader = styled(Layout.Header)<TransparentProps>`
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

  a {
    display: flex;
    align-items: center;
  }

  img {
    height: 7vh;
  }
`;

export const MenuContainer = styled(Menu)<TransparentProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;

  .ant-menu-item {
    padding: 0 1.3vw;
    margin: 0 1.3vw;
    font-size: 3vh;
    transition: color 0.3s ease;

    a {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};
    }

    a:hover, a:focus {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};
    }

    a:active, a:visited {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -0.2vh; // Adjust this value to position the border correctly
      left: 0;
      right: 0;
      height: 0.2vh;
      background-color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::before, &.ant-menu-item-selected::before {
      transform: scaleX(1);
    }
  }
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