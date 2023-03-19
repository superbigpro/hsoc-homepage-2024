import Link from 'next/link';
import { NextRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';

import { Student } from '@/utils';

import * as S from './styled';

interface ModalProps {
  student: Student;
  query: ParsedUrlQuery;
}

const Modal: React.FC<ModalProps> = ({ student, query }) => {
  return (
    <Link href={`/dashboard`}>
      <S.Wrap>
        <S.ModalDiv>
          <S.IntroduceDiv>
            {query.folio ? (
              <S.IntroduceContent>{student.portfolio || 'NULL'}</S.IntroduceContent>
            ) : (
              <S.IntroduceContent>{student.introduce || 'NULL'}</S.IntroduceContent>
            )}
          </S.IntroduceDiv>
        </S.ModalDiv>
      </S.Wrap>
    </Link>
  );
};

export default Modal;
