// src/components/HeaderStyles.ts
import styled from 'styled-components';
import { Layout, Menu, Button, Drawer, Modal } from 'antd';
import { Link } from 'react-router-dom';
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

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
  }
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

    @media (max-width: 768px) {
      height: 5vh;
    }
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
    transition: color 0.3s ease;

    a {
      font-size: 3vh;
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)} !important;
    }

    a:hover, a:focus {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)} !important;
    }

    a:active, a:visited {
      color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)} !important;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -0.2vh;
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

  @media (max-width: 768px) {
    .ant-menu-item {
      padding: 0 1rem;
      font-size: 2.5vh;
    }
  }

  @media (max-width: 480px) {
    display: none; /* Hide menu on very small screens, can replace with a mobile menu icon */
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    border-radius: 2vw;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
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

export const MobileMenuIcon = styled(Button)<TransparentProps>`
  display: none; // Default to hidden

  @media (max-width: 768px) {
    display: flex; // Show only on mobile
    color: ${({ transparent }) => (transparent ? 'white' : colors.primaryGreen)};
    border: none;
    background: transparent;
    font-size: 1.8rem;
  }
`;

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    background-color: white;
  }

  .ant-drawer-header {
    background-color: ${colors.primaryGreen};
    color: white;
  }

  .ant-drawer-body {
    padding: 1rem;
  }
`;

export const DrawerMenuItem = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const DrawerLink = styled(Link)`
  color: ${colors.primaryGreen} !important;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${colors.softMint} !important;
  }
`;