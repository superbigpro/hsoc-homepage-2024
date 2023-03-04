import * as S from "./styled";
import type { NextPage } from "next";
import { SectionTemplate } from "src/components";
import NetWorkLogo from 'src/assets/png/network-logo.png';
import ForensicLogo from 'src/assets/png/forensic-logo.png';
import SystemLogo from 'src/assets/png/system-logo.png';
import CryptoLogo from 'src/assets/png/crypto-logo.png';
import WebLogo from 'src/assets/png/web-logo.png';
import { TitleSection } from "src/components/TitleSection";

const fields = [
    {
        bigTitle: "와이어샤크와 HxD를 이용한",
        title: "네트워크",
        description: "네트워크에서는 와이어 샤크(Wireshark)를 사용하여 패킷을 캡처하고 분석하여 네트워크 패킷에 대한 이해도를 높일 수 있어요.  또한 HxD를 활용하여 이진 파일을 읽을 수 있어요. 와이어 샤크에서 캡처된 패킷 안에 포함된 이미지 파일 통신 기록을 확인하고HxD를 활용하여 이미지 파일을 복원할 수도 있어 다양한 활용이 가능해요.",
        src: NetWorkLogo.src
    },
    {
        bigTitle: "오픈스테고를 HxD를 이용한",
        title: "포렌식",
        description: "포렌식 분야에서는 HxD와 오픈스테고(OpenStego)를 활용해요. 오픈스테고는 안티포렌(Anti-Forensic)기술 중 하나인 스테가노그래피(Steganography)를 위한 도구에요. 스테가노그래피는 각종 파일에 특정 메시지를 숨겨서 전송하는 방식으로, 오픈스테고를 활용하면 파일을 숨기거나 발견할 수 있어요. 또한 HxD를 사용하여 파일을 파괴하거나 복구하는 등 다양한 작업이 가능해요.",
        src: ForensicLogo.src
    },
    {
        bigTitle: "GDB와 IDA를 이용한",
        title: "시스템",
        description: "시스템 분야에서는 GDB와 IDA와 같은 디버거를 사용해요. GDB는 리눅스 환경에서 사용되는 디버거로, 프로그램의 실행을 중단하고 프로그램의 상태를 확인하고, 프로그램의 실행을 제어할 수 있어요. IDA는 프로그램의 실행을 중단하고 프로그램의 상태를 확인하고, 프로그램의 실행을 제어할 수 있어요. 또한 IDA는 프로그램의 실행을 중단하고 프로그램의 상태를 확인하고, 프로그램의 실행을 제어할 수 있어요.",
        src: SystemLogo.src
    },
    {
        bigTitle: "Sage를 이용한",
        title: "암호학",
        description: "암호학 분야에서는 Sage를 사용해요. Sage는 수학과 컴퓨터 과학을 위한 공개 소프트웨어로, 수학적인 계산을 위한 다양한 기능을 제공해요. 또한 Sage는 수학적인 계산을 위한 다양한 기능을 제공해요.",
        src: CryptoLogo.src
    },
    {
        bigTitle: "Javascript를 이용한",
        title: "웹",
        description: "웹 분야에서는 자바스크립트를 이용하여 다양한 웹 사이트를 구축해요. React JS와 Nest JS 같은 자바스크립트 프레임워크를 활용하면 보다 효율적으로 웹 사이트를 구축할 수 있아요. 하지만 웹 사이트는 취약점을 가지고 있을 가능성이 있어요. 따라서 웹 분야에서는 자신이 만든 웹 사이트에서 취약점을 찾고 이를 보완하는 일을 해요. 이를 위해 다양한 보안 도구와 기법을 활용하여 웹 사이트의 보안성을 높이는 작업을 수행해요.",
        src: WebLogo.src
    },
]

const FieldPage: NextPage = () => {
    return (
        <main style={{ width: "100%" }}>
            <TitleSection title="분야 소개" />
            {fields.map((field, index) => (
                <>
                    <SectionTemplate
                        isSecondary={index % 2 === 0}
                        shortDescription="보안관제에서는 이런것들이 있어요!"
                        title={
                            <>
                                {field.bigTitle}
                                <br />
                                <strong>{field.title}</strong>
                            </>
                        }
                        description={field.description}
                    >
                        <S.SectionImage src={field.src} />
                    </SectionTemplate>
                </>
            ))}
        </main >
    );
};

export default FieldPage;
