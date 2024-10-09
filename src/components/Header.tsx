// src/components/HeaderComponent.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import logoWhite from '../assets/logoWhite.webp';
import { MenuProps } from 'antd';

import {
  CustomHeader,
  LogoContainer,
  MenuContainer,
  RightButton,
} from './HeaderStyles.ts'; // Import the styled components

interface HeaderComponentProps {
  transparent: boolean;
  onOpenModal?: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ transparent, onOpenModal }) => {
  // Define the menu items
  const menuItems: MenuProps['items'] = [
    { key: '1', label: <Link to="/about">About</Link> },
    { key: '2', label: <Link to="/services">Portfolio</Link> },
    { key: '3', label: <Link to="/contact">Team</Link> },
  ];

  return (
    <CustomHeader transparent={transparent}>
      {/* Logo */}
      <LogoContainer>
        <Link to="/">
        <img src={transparent ? logoWhite : logo} alt="Logo" />
        </Link>
      </LogoContainer>

      {/* Centered Menu */}
      <MenuContainer
        transparent={transparent}
        theme="dark"
        mode="horizontal"
        items={menuItems}
      />

      {/* Right Button */}
      <RightButton onClick={onOpenModal}>Download</RightButton>
    </CustomHeader>
  );
};

export default HeaderComponent;