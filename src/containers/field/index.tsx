import type { NextPage } from 'next';

import { SectionTemplate, TitleSection } from '@/components';
import { FIELD_LIST } from '@/utils';

import * as S from './styled';

const FieldPage: NextPage = () => {
  return (
    <main style={{ width: '100%' }}>
      <TitleSection title="분야 소개" />
      {FIELD_LIST.map(({ bigTitle, title, description, src }, index) => (
        <SectionTemplate
          isSecondary={index % 2 === 0}
          shortDescription="보안관제에서는 이런것들이 있어요!"
          title={
            <>
              {bigTitle}
              <br />
              <strong>{title}</strong>
            </>
          }
          description={description}
        >
          <S.SectionImage src={src} />
        </SectionTemplate>
      ))}
    </main>
  );
};

export default FieldPage;
