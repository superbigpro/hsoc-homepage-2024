import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import LogoBig from '@/assets/png/logo-big.png';
import { FormProps, instance } from '@/utils';
import { FormButton, Input } from '@/components';

import * as S from '../styled';
import axios from 'axios';

const RegisterPage: NextPage = () => {
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormProps>();

  const onValid = async (formData: FormProps) => {
    if (formData.password !== formData.passwordCheck) {
      setError(
        'passwordCheck',
        { message: '비밀번호가 일치하지 않습니다.' },
        { shouldFocus: true },
      );
    }  
    else {
      const { data } = await axios.post('/api/create', {
        username: formData.username,
        name: formData.name,
        school_id: formData.school_id,
        password: formData.password,
      });
      data.ok ? Router.replace('/login') : Error(data.message);
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      Router.replace('/');
    }
  }, [status]);

  return (
    <>
      <S.LogoBigImage src={LogoBig.src} />
      <S.RegisterWrap>
        <S.FormDiv>
          <S.InfoDiv>
            <Input
              register={register}
              errors={errors}
              title="아이디"
              name="username"
              divStyle={{ marginTop: '0' }}
              type="username"
              minValue={2}
              maxValue={12}
            />
            <Input
              register={register}
              errors={errors}
              title="이름"
              name="name"
              minValue={2}
              maxValue={5}
              type="text"
            />
            <Input
              register={register}
              errors={errors}
              title="학번"
              example="예) 클라우드보안과 1학년 1반 1번 - C1101"
              name="school_id"
              minValue={5}
              maxValue={5}
              type="text"
            />
            <Input
              register={register}
              errors={errors}
              title="비밀번호"
              name="password"
              type="password"
              example="비밀번호는 영문, 숫자를 포함한 8자 이상이어야 합니다."
              minValue={8}
              maxValue={20}
            />
            <Input
              register={register}
              errors={errors}
              title="비밀번호 확인"
              name="passwordCheck"
              type="password"
              minValue={8}
              maxValue={20}
            />
          </S.InfoDiv>
          <FormButton handleSubmit={handleSubmit} onValid={onValid} title="회원가입" />
          <S.LinkButton>
            이미 계정이 있으신가요?
            <Link href="/login">로그인</Link>
          </S.LinkButton>
        </S.FormDiv>
      </S.RegisterWrap>
    </>
  );
};

export default RegisterPage;
