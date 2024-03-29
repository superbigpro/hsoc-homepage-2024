import { BaseSyntheticEvent } from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

import { FormProps } from '@/utils';

import * as S from './styled';

interface FormButtonProps {
  title: string;
  handleSubmit: (
    onValid: SubmitHandler<FormProps>,
    onError?: SubmitErrorHandler<FormProps>,
  ) => (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  onValid: SubmitHandler<FormProps>;
}

export const FormButton: React.FC<FormButtonProps> = ({ title, handleSubmit, onValid }) => {
  return (
    <S.ButtonDiv>
      <S.ButtonUi onClick={handleSubmit(onValid)} variant="contained">
        {title}
      </S.ButtonUi>
    </S.ButtonDiv>
  );
};
