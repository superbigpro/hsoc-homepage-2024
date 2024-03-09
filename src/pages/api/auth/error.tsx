import { NextPage } from 'next';

import * as S from './styled';

const NonePage: NextPage = () => {
  return (
    <S.Wrap className="container">
      <h1>500</h1>
      <S.Line></S.Line>
      <S.Message>현재 서비스에 접근할 수 없습니다.</S.Message>
    </S.Wrap>
  );
};

export default NonePage;
