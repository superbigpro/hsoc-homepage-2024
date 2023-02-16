import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdDehaze } from "react-icons/md";

export const NavbarWrapper = styled(Navbar)`
	position: sticky;
	top: 0;
	left: 0;
	backdrop-filter: blur(54px);
	background: linear-gradient(180deg, rgba(21, 21, 23, 0.7) 0%, rgba(21, 21, 23, 0) 100%);
	padding: 10px 0;
	z-index: 99;
	/* @media (min-width: 768px) {
		border-bottom: 1px solid #6A6A6A;
	} */
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
`;

export const NavbarMenuItem = styled(Nav.Link)`
	font-size: 18px;
	font-weight: 400;
	float: left;
	color: var(--color-white) !important;

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
    &:focus{
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
