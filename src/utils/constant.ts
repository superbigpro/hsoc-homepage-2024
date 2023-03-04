export const navMenuList: { href: string; text: string; }[] = [
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
        href: "/apply",
        text: "지원하기",
    },
];

export const questions: { question: string, answer: string }[] = [
    {
        question: "보안관제는 어떤 동아리 인가요?",
        answer: "해킹 대회 문제를 학습 및 연구하며 교내/외 대회 문제를 출제하고 개최하는 동아리에요",
    },
    {
        question: "전공 지식이 없어도 괜찮은가요?",
        answer: "전공 지식이 부족하거나 없더라도 선배님들과의 멘토링을 통해 천천히 배워 나가실 수 있어요",
    },
    {
        question: "모집 분야는 어떻게 되나요?",
        answer: "모집 분야는 웹, 포렌식, 네트워크, 시스템, 암호학 총 5가지의 분야로 구성되어있으며, 각 분야마다 최소 1명 이상의 멘토를 담당해주실 선배님이 계셔요",
    },
    {
        question: "동아리에서는 주로 어떤 활동을 하나요?",
        answer: "선배들과 함께하는 전공 수업과 멘토링, 외부 강사님과 함께하는 1팀 1기업 프로젝트, 그리고 교내/외 해킹 대회 운영 등 다양한 활동들이 준비되어 있어요!",
    },
    {
        question: "모집 인원은 몇 명인가요?",
        answer: "모집 인원 미정이에요 (언제든 열려있으니, 많은 관심과 지원 부탁드려요!)",
    },
];

export const phoneNumberPattern = /^01([0|1|6|7|8|9]?)-?[0-9]{3,4}-?[0-9]{4}$/;

export const nameNumberPattern = /^[가-힣]{2,4}$/; // 

export const studentNumberPattern = /^[CN][0-9]{4}$/; 


