import type { NextPage } from "next";
import * as S from "./styled";
import { Button, HighlightText, Section, SectionTemplate } from "src/components";
import LogoBig from "src/assets/png/logo-big.png";
import SixthSecurityContestJPG from "src/assets/png/6th-security-contest.jpg";
import SeventhSecurityContestJPG from "src/assets/png/7th-security-contest.jpg";
import ServerRoom1JPG from "src/assets/png/server-room-1.jpg";
import ServerRoom2JPG from "src/assets/png/server-room-2.jpg";
import ServerRoom3JPG from "src/assets/png/server-room-3.jpg";
import ServerRoom4JPG from "src/assets/png/server-room-4.jpg";
import Contest1PNG from "src/assets/png/contest-1.png";
import Contest2JPG from "src/assets/png/contest-2.jpg";
import Contest3JPG from "src/assets/png/contest-3.jpg";
import MentorJPG from "src/assets/png/mentor.jpg";
import Link from "next/link";

const FieldPage: NextPage = () => {
    return (
        <main style={{ width: "100%" }}>
            <Section>
                <S.SectionContentContainer>
                    <S.LogoBigImage src={LogoBig.src} />
                    <S.TitleText>
                        보안관제 동아리
                        <br />
                        <br />
                        <strong>분야 소개</strong>
                    </S.TitleText>
                </S.SectionContentContainer>
            </Section>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에서는 이런것들이 있어요!"
                title={
                    <>
                        와이어샤크와 HxD를 이용한
                        <br />
                        <strong>네트워크</strong>
                    </>
                }
                description={
                    <>
                        네트워크에선  와이어 샤크(wireshark)로
                        패킷을 캡쳐하고 분석하며 네트워크 패킷에
                        대한 이해도를  키울 수 있어요. 또한 HxD를 이용하여
                        이진 파일을 읽을 수 있어요.  와이어 샤크에서
                        캡쳐된 패킷내에 이미지 파일을 통신한
                        기록을 가지고 HxD를 이용해 이미지 파일을
                        복구하는 등  많은걸 할 수 있어요.
                    </>
                }
            >
                <S.SectionImage src={MentorJPG.src} />
            </SectionTemplate>
            <SectionTemplate
                shortDescription="보안관제에서는 이런것들이 있어요!"
                ShortDescriptionTextSecondary=" 2022/4/21~2022/6/27"
                title={
                    <>
                        오픈스테고를 HxD를 이용한
                        <br />
                        <strong>디지털 포렌식</strong>
                    </>
                }
                description={
                    <>
                        디지털 포렌식에선 HxD와 오픈스테고(OpenStego)를
                        사용해요. 오픈스테고는 안티포렌(Anti-Forensic)의
                        방법중 하나인  스테가노그래피의 툴이에요.
                        스테가노그래피란  각종 파일에 특정 메세지를 숨겨서
                        보내는 방식이에요. 오픈스테고를 사용함으로써 각종
                        파일을 숨길수도, 찾을 수도 있어요. 또한 HxD로도
                        파일을 깨지게 할 수있고, 복구하는 등
                        많은 일들을 할 수 있어요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에서는 이런것들이 있어요!"
                ShortDescriptionTextSecondary=" 2022/9/21~2022/11/27"
                title={
                    <>
                        GDB와 IDA를 이용한
                        <br />
                        <strong>시스템</strong>
                    </>
                }
                description={
                    <>
                        시스템에선 GDB와 IDA와 같은 디버깅 툴을 사용해요.
                        GDB는 프로그램 내부에서 무슨 일이 일어나고 있는지 보여줘요.
                        이로써 프로그램에 있는 버그를 잡는데 도움을 줘요.
                        IDA는 디스어셈블러의 일종이에요. 디스어셈블러는 바이너리 파일을
                        역으로 어셈블리어로 재구성해주는 툴이에요.
                        IDA는 바이너리, 어셈블리, 프로그래밍 언어까지 변환을 지원해줘요.
                        GDBserver와 IDA 의 remote gdb debugger 기능을 이용하여
                        elf binary를 디버깅하는 등 이 두개의 툴을 이용하여 많은걸 할 수 있어요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
            <SectionTemplate
                shortDescription="보안관제에서는 이런것들이 있어요!"
                ShortDescriptionTextSecondary=" 2022/4/21~2022/6/27"
                title={
                    <>
                        Sage를 이용한
                        <br />
                        <strong>암호학</strong>
                    </>
                }
                description={
                    <>
                        암호학에선 해킹으로부터 안전하도록 암호화해서 저장하는 일을 해요.
                        암호학은 수학 이론에 기반해서 수학 계산을 돕기 위해
                        Sage라는 수학 계산 프로그램을 사용해요.
                        암호학에서는 키 생성, 암호화, 복호화를 배워요. 키 생성은 암호화와
                        복호화에서 사용할 키를 생성하는 것이고, 암호화는 키를 평문에서
                        암호문으로 바꾸는 거에요. 복호화는 암호문에서 다시
                        평문으로 바꾸는거에요. 송신자가 보낼때 평문을 암호화해서 보내고,
                        수신자는 키를 사용해 암호화를 평문으로 바꾸는 방식으로 이루어져요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
            <SectionTemplate
                shortDescription="보안관제에서는 이런것들이 있어요!"
                ShortDescriptionTextSecondary=" 2022/4/21~2022/6/27"
                title={
                    <>
                        Javascript를 이용한
                        <br />
                        <strong>웹</strong>
                    </>
                }
                description={
                    <>
                        웹에서는 자바스크립트(Javascript)와 reactjs와 nestjs 등
                        자바스크립트의 프레임워크를 이용하여 실제 웹  사이트를
                        만들며, 자신이 만든 웹  사이트에 취약점을 찾고,
                        보완하는 일을 해요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
        </main >
    );
};

export default FieldPage;
