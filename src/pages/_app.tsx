import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "src/components";
import { GlobalStyle } from "src/styles/globalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ga from "src/lib/ga/index";
import { baseUrl } from "src/lib/ga/base-url";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => ga.pageview(url);
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router.events]);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<DefaultSeo
				title="HSOC | 한세사이버보안고등학교 보안관제 동아리"
				description="한세사이버보안고등학교 보안관제 동아리"
				canonical="https://hsoc.kr"
				openGraph={{
					type: "website",
					locale: "ko_KR",
					url: "https://hsoc.kr",
					title: "HSOC | 한세사이버보안고등학교 보안관제 동아리",
					description: "한세사이버보안고등학교 보안관제 동아리",
					images: [{ url: "https://hsoc.kr/og_thumbnail.png", width: 1200, height: 630 }],
					site_name: "HSOC | 한세사이버보안고등학교 보안관제 동아리",
				}}
			/>
			<GlobalStyle />
			<SessionProvider session={pageProps.session} basePath={`/api/auth`}>
				<Navbar />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
