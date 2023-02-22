import { ImageProps } from "next/image";
import styled from "styled-components";

export const TitleText = styled.p`
	color: var(--color-white);
	font-size: 40px;
	font-weight: 200;
	line-height: 40px;
	text-align: center;

	strong {
		font-weight: 700;
	}

	@media screen and (max-width: 991px) {
		font-size: 34px;
		line-height: 45px;
	}

	@media screen and (max-width: 575px) {
		font-size: 30px;
		line-height: 39px;
	}
`;

export const LogoBigImage = styled.div<{ src: string }>`
	width: 300px;
	height: 300px;
	opacity: 0.9;
	background-size: cover;
	background-image: url(${(props) => props.src});
	filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.25));
`;

export const SectionContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SectionImage = styled.div<{ src: string }>`
	width: 425px;
	height: 255px;
	filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
	border-radius: 15px;
	box-shadow: 0px 0px 10px 0px #00000040;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.src});

	@media screen and (max-width: 991px) {
		width: 300px;
		height: 180px;
	}

	@media screen and (max-width: 767px) {
		width: 450px;
		height: 270px;
	}

	@media screen and (max-width: 540px) {
		width: 360px;
		height: 234px;
	}

	@media screen and (max-width: 400px) {
		width: 320px;
		height: 192px;
	}
`;

