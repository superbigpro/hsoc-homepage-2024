import styled from "styled-components";

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
		width: 314px;
		height: 192px;
	}
`;

