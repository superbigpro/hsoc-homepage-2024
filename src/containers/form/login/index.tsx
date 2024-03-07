import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { NextPage } from 'next';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import LogoBig from '@/assets/png/logo-big.png';
import { Error, FormProps, Info } from '@/utils';
import { FormButton, Input } from '@/components';

import * as S from '../styled';

const LoginPage: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormProps>();

  const onValid = async (formData: FormProps) => {
    await signIn('credentials', {
      username: formData.username, //// <<< id => username 
      password: formData.password,
      redirect: false,
    }).then((res) => {
      res?.ok
        ? Router.replace('/')
        : ((Error('로그인에 실패하셨습니다'), setValue('username', ''), setValue('password', '')),
        console.log(formData)
        );
    });
  };

  useEffect(() => {
    if (status === 'authenticated') {
      Router.replace('/');
    }
    if (router.query.redirect) {
      Info('지원하려면, 먼저 로그인을 하셔야 합니다.');
    }
  }, []);

  return (
    <>
      <S.LogoBigImage src={LogoBig.src} />
      <S.LoginWrap>
        <S.FormDiv>
          <S.InfoDiv>
            <Input
              register={register}
              errors={errors}
              title="아이디"
              name="username"
              divStyle={{ marginTop: '0' }}
              minValue={2}
              maxValue={12}
            />
            <Input
              register={register}
              errors={errors}
              title="비밀번호"
              name="password"
              type={'password'}
              minValue={8}
              maxValue={20}
            />
          </S.InfoDiv>
          <FormButton handleSubmit={handleSubmit} onValid={onValid} title="로그인" />
          <S.LinkButton>
            아직 계정이 없으신가요?
            <Link href="/register">회원가입</Link>
          </S.LinkButton>
        </S.FormDiv>
      </S.LoginWrap>
    </>
  );
};

export default LoginPage;
