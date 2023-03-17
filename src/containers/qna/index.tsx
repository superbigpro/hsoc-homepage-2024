import type { NextPage } from "next";
import * as S from "./styled";
import { Section } from "@/components";
import { useState } from "react";
import { TitleSection } from "@/components/TitleSection";
import { QNA_List } from "@/utils";

const QnAPage: NextPage = () => {
	const [showList, setShowList] = useState(QNA_List.map((v) => false));

	return (
		<main style={{ width: "100%" }}>
			<TitleSection title="Q & A" />
			<Section isSecondary>
				<S.QuestionsContainer>
					{QNA_List.map((v, i) => {
						return (
							<S.QuestionContainer key={i} isOpen={showList[i]} onClick={(e) => setShowList((prev) => ({ ...prev, [i]: !prev[i] }))}>
								<S.QuestionButton>Q. {v.question}</S.QuestionButton>
								<S.AnswerContainer
									initial="closed"
									animate={showList[i] ? "open" : "closed"}
									variants={{
										open: { opacity: 1, },
										closed: { opacity: 0, },
									}}
									transition={{ duration: 0.2 }}
									isOpen={showList[i]}
								>
									<S.Answer>
										A. {v.answer}
									</S.Answer>
								</S.AnswerContainer>
							</S.QuestionContainer>
						);
					})}
				</S.QuestionsContainer>
			</Section>
		</main >
	);
};

export default QnAPage;
