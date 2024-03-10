import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import RightArrowSVG from '@/assets/svg/right-arrow.svg';
import LogoBig from '@/assets/png/logo-big.png';
import { Error, FormProps, instance, Success } from '@/utils';
import { FormButton, Input } from '@/components';

import * as S from '../styled';
import axios from 'axios';

const ApplyPage: NextPage = () => {
  const [info, setInfo] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormProps>();

  const jwt_token = localStorage.getItem('token');
  if (!jwt_token) {
    Error('로그인이 필요합니다.');
    router.push('/');
  }

  const onValid = async (formData: FormProps) => {
    const response = await instance.get('/api/auth/verifyToken');
    console.log(`here is your console : ${response.data.token}`);
    if (response.status === 401 || response.status === 500 || !response.data.token){
      Error('로그인이 필요합니다.');
      router.push('/');
    }

    const { data } = await axios.post('/api/createApply', {
      phone_number: formData.phone_number,
      introduce: formData.introduce,
      field: formData.field,
      portfolio: formData.portfolio,
      token: response.data.token
    });
    data.ok
      ? (Success(data.message),
        setValue('phone_number', ''),
        setValue('introduce', ''),
        setValue('portfolio', ''))
      : Error(data.message);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length === 10) {
      setValue('phone_number', inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setValue(
        'phone_number',
        inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  };

  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 1000) {
      setValue('introduce', inputValue.slice(0, 1000));
      setValue('portfolio', inputValue.slice(0, 1000));
    }
  };

  const getMyInfo = async () => {
    const { data } = await instance.post('/api/user');
    data.ok
      ? (setInfo(true),
        setValue('phone_number', data.phoneNumber),
        setValue('introduce', data.introduce),
        setValue('portfolio', data.portfolio),
        setValue('field', data.field))
      : Error(data.message);
  };

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     Router.replace('/login?redirect=/apply');
  //   }
  // }, [status, info]);

  return (
    <>
      {/* {status === 'authenticated' && ( */}
        <>
          <S.LogoBigImage src={LogoBig.src} />
          <S.ApplyWrap>
            <S.FormDiv>
              {/* <S.GetMyInfoMessage onClick={getMyInfo}>
                수정하기
                <RightArrowSVG style={{ marginBottom: '4px' }} />
              </S.GetMyInfoMessage> */}
              <S.InfoDiv>
                <Input
                  register={register}
                  errors={errors}
                  title="전화번호"
                  name="phone_number"
                  minValue={13}
                  maxValue={13}
                  onChange={onChange}
                  divStyle={{ marginTop: '10px' }}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="자기소개"
                  name="introduce"
                  minValue={1}
                  maxValue={3000}
                  textAreaChange={textAreaChange}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="자기 역량"
                  name="portfolio"
                  minValue={1}
                  maxValue={3000}
                  example="다룰 줄 아는 프로그래밍 언어나 진행해본 프로젝트 같은 것이 있다면 자유롭게 적어주세요."
                  textAreaChange={textAreaChange}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="배우고싶은 분야"
                  name="field"
                  minValue={1}
                  maxValue={1}
                />
              </S.InfoDiv>
              <FormButton
                handleSubmit={handleSubmit}
                onValid={onValid}
                title={info ? '수정하기' : '지원하기'}
              />
              <S.WarnText>한번 제출 시 수정이 불가합니다.</S.WarnText>
            </S.FormDiv>
          </S.ApplyWrap>
        </>
      {/* )} */}
    </>
  );
};

export default ApplyPage;
