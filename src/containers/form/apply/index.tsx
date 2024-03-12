import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import LogoBig from '@/assets/png/logo-big.png';
import { FormButton, Input } from '@/components';
import { Error, FormProps, instance, Success } from '@/utils';
import getCookie from '@/utils/constant/getCookie';

import * as S from '../styled';

const ApplyPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormProps>();

  useEffect(() => {
    const jwt_token = getCookie('token');
    if (!jwt_token) {
      Error('로그인이 필요합니다.');
      router.push('/');
    }
  }, [router]);

  const onValid = async (formData: FormProps) => {
    const response = await instance.get('/api/auth/verifyToken');
    console.log(`here is your console : ${response.data.token}`);
    if (response.status === 401 || response.status === 500 || !response.data.token) {
      Error('로그인이 필요합니다.');
      router.push('/');
    }

    const { data } = await axios.post('/api/createApply', {
      phone_number: formData.phone_number,
      introduce: formData.introduce,
      field: formData.field,
      portfolio: formData.portfolio,
      token: response.data.token,
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

  return (
    <>
      <S.LogoBigImage src={LogoBig.src} />
      <S.ApplyWrap>
        <S.FormDiv>
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
          <FormButton handleSubmit={handleSubmit} onValid={onValid} title={'지원하기'} />
          <S.WarnText>한번 제출 시 수정이 불가합니다.</S.WarnText>
        </S.FormDiv>
      </S.ApplyWrap>
    </>
  );
};

export default ApplyPage;
