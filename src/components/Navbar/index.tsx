import React, { useEffect, useState } from "react";
import * as S from "./styled";

import LogoPNG from "src/assets/png/logo.png";
import Image from "next/image";
import Link from "next/link";

const navMenuList = [
	{
		href: "/qna",
		text: "Q&A",
	},
	{
		href: "/field",
		text: "분야 소개",
	},
	{
		href: "/history",
		text: "관제 일지",
	},
	{
		href: "/login",
		text: "로그인",
	},
	// {
	// 	href: "https://wargame.hsoc.kr",
	// 	text: "워게임",
	// },
];

export const Navbar: React.FC = () => {

	return (
		<S.NavbarWrapper expand="md" >
			<S.NavbarContainer className="container" >
				<Link href="/" passHref>
					<a>
						<Image src={LogoPNG.src} alt="보안관제 동아리 로고" width="55" height="55" />
					</a>
				</Link>
				<S.NavTog ><S.TogIcon /></S.NavTog>
				<S.NavbarMenuList id="basic-navbar-nav">
					<S.NavbarMenuItemWrap className="me-auto">
						{navMenuList.map((menu, i) => {
							return (
								<Link key={i} href={`${menu.href}`}>
									{menu.text}
								</Link>
							);
						})}
					</S.NavbarMenuItemWrap>
				</S.NavbarMenuList>

			</S.NavbarContainer>
		</S.NavbarWrapper>
	);
};
