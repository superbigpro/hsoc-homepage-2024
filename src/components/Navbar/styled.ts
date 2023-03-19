import Image from 'next/image';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { MdDehaze } from 'react-icons/md';

import styled from 'styled-components';

export const NavbarWrapper = styled(Navbar)`
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter: blur(54px);
  background: linear-gradient(180deg, rgba(21, 21, 23, 0.7) 0%, rgba(21, 21, 23, 0) 100%);
  padding: 10px 0;
  z-index: 99;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const NavbarMenuList = styled(Navbar.Collapse)`
  margin: 0;
  padding: 0;
  flex-grow: 0 !important;
`;

export const NavbarMenuItemWrap = styled(Nav)`
  a,
  p {
    cursor: default;
    color: unset !important;
    text-decoration: none !important;
    font-size: 18px;
    font-weight: 400;
    float: left;
    &:hover {
      font-weight: 500;
      text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.39);
    }
  }
  & > a:not(:last-child),
  p:not(:last-child) {
    margin-right: 18px;
  }
  @media screen and (min-width: 767px) {
    & > div:not(:last-child),
    a:not(:last-child),
    p:not(:last-child) {
      margin-right: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    a,
    p {
      margin: 8px 0;
    }
  }
`;

export const LogOutMessage = styled.p`
  color: unset !important;
  text-decoration: none !important;
  font-size: 18px;
  font-weight: 400;
  float: left;
  &:hover {
    font-weight: 500;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.39);
  }
`;

export const NavTog = styled(Navbar.Toggle)`
  margin: 0;
  padding: 0;
  border: none;
  color: none;
  display: flex;
  justify-content: flex-start;
  height: fit-content;
  &:focus {
    outline: 0;
    text-decoration: none;
    box-shadow: none;
  }
`;

export const TogIcon = styled(MdDehaze)`
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  color: var(--color-white);
`;

export const LogoImage = styled(Image)`
  width: 55px;
  height: 55px;
  @media screen and (max-width: 567px) {
    width: 45px !important;
    height: 45px !important;
  }
`;
