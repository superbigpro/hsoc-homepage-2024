import React from "react";
import * as S from "./styled";
import LogoPNG from "src/assets/png/logo.png";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { navMenuList } from "src/utils/constant";

export const Navbar: React.FC = () => {
	const { status } = useSession();

	const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const eventTarget = e.target as HTMLDivElement;
		eventTarget?.parentElement?.parentElement?.parentElement?.classList.remove('show')
	}

	return (
		<S.NavbarWrapper expand="md" >
			<S.NavbarContainer className="container" >
				<Link href="/" passHref>
					<a>
						<S.LogoImage src={LogoPNG.src} alt="보안관제 동아리 로고" width="55px" height="55px" />
					</a>
				</Link>
				<S.NavTog ><S.TogIcon /></S.NavTog>
				<S.NavbarMenuList id="basic-navbar-nav">
					<S.NavbarMenuItemWrap className="me-auto">
						{navMenuList.map((menu, i) => {
							return (
								<div key={i} onClick={onClick} >
									<Link key={i} href={`${menu.href}`}>
										{menu.text}
									</Link>
								</div>
							);
						})}
						{status !== "authenticated" ? (
							<div onClick={onClick} >
								<Link href='/login'>
									로그인
								</Link>
							</div>
						) : (
							<>
								<div onClick={onClick} >
									<p onClick={() => { signOut({ redirect: false }) }}>로그아웃</p>
								</div>
							</>
						)}
					</S.NavbarMenuItemWrap>
				</S.NavbarMenuList>
			</S.NavbarContainer>
		</S.NavbarWrapper>
	);
};
