// src/components/HeaderComponent.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../assets/logo.webp';
import logoWhite from '../assets/logoWhite.webp';
import Qrcode from '../assets/qrCode.svg';
import { MenuItemType } from 'antd/es/menu/interface';
import {
  CustomHeader,
  LogoContainer,
  MenuContainer,
  RightButton,
  MobileMenuIcon,
  CustomDrawer,
  DrawerMenuItem,
  DrawerLink,
  ModalContainer
} from './HeaderStyles.ts';



interface HeaderComponentProps {
  transparent: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ transparent }) => {
  // State to control Drawer visibility
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Define the menu items
  const menuItems: MenuItemType[] = [
    { key: '1', label: <DrawerLink to="/about">About</DrawerLink> },
    { key: '2', label: <DrawerLink to="/portfolio">Portfolio</DrawerLink> },
  ];

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Update `isMobile` state based on screen width
  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth <= 768;
      setIsMobile(isCurrentlyMobile);

      // Close the drawer if switching from mobile to desktop
      if (!isCurrentlyMobile) {
        setDrawerVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CustomHeader transparent={transparent}>
      {/* Logo */}
      <LogoContainer>
        <Link to="/">
          <img src={transparent ? logoWhite : logo} alt="Logo" />
        </Link>
      </LogoContainer>

      {/* Desktop Menu */}
      {!isMobile && (
        <MenuContainer
          transparent={transparent}
          theme="dark"
          mode="horizontal"
          items={menuItems}
        />
      )}

      {/* Right Button (Desktop) */}
      {!isMobile && <RightButton onClick={openModal}>Download</RightButton>}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <MobileMenuIcon
          transparent={transparent}
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
        />
      )}
        {/* Modal for QR Code */}
          <ModalContainer
          title="Scan to Access the Project"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null} 
        >
          <a className="qrCodeContainer" href="https://github.com/thomas-planchard/moonshotProject"rel="nofollow">
          <img src={Qrcode}></img>
          </a>
        </ModalContainer>

      {/* Mobile Drawer */}
      <CustomDrawer
        title="Menu"
        placement="right" // Change the drawer placement to top
        onClose={toggleDrawer}
        open={drawerVisible}
        width={240} // Set the drawer width to be smaller
      >
        {menuItems.map((item) => (
          <DrawerMenuItem key={item?.key} onClick={toggleDrawer}>
            <DrawerLink to={item?.key === '1' ? '/about' : item?.key === '2' ? '/portfolio' : '/'}>
              {item?.label}
            </DrawerLink>
          </DrawerMenuItem>
        ))}
      </CustomDrawer>
    </CustomHeader>
  );
};

export default HeaderComponent;