import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/Button/Button';
import Logo from '../../components/Header/Logo';
import Input from '../../components/Input/Input';
import styles from './SignIn.module.css';
import axios from 'axios';
import { Context } from '../../context';
import { CHANGE_USER_INFO } from '../../context/actionTypes';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { apiClient } from '../../api/api';

const SignIn = () => {
  const [state, dispatch] = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    const currentEmail = event.currentTarget.value;
    setEmail(currentEmail);
  };

  const onPasswordHandler = (event) => {
    const currentPassword = event.currentTarget.value;
    setPassword(currentPassword);
  };

  // 소셜로그인 부분 킵
  const googleLogin = async () => {
    // try {
    //   await axios.get(`${URL}/api/auth/google`, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // window.open('http://localhost:4000/api/auth/google');
  };
  const kakaoLogin = async () => {
    // try {
    //   await axios.get(`${URL}/api/auth/kakao`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const apiCall = async () => {
    try {
      const response = await apiClient.post(
        '/api/auth/signIn',
        {
          email,
          password,
        },
        { withCredentials: true, credentials: 'include' }
      );
      dispatch({
        type: CHANGE_USER_INFO,
        payload: response.data,
      });
      if (!response.data.nickname) navigate('/profile-register');
      else navigate('/');
    } catch (err) {
      console.log(err);
      alert('이메일 또는 비밀번호를 확인해주세요.');
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    apiCall();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoArea}>
        <Logo type='col' />
      </div>
      <article>
        <div className={styles.formGroup}>
          <form method='POST' onSubmit={onSubmitHandler}>
            <Input
              type='email'
              name='email'
              placeholder='이메일'
              autoComplete='off'
              value={email}
              onChange={onEmailHandler}
              marginBottom='1rem'
              required
            />
            <Input
              type='password'
              name='password'
              placeholder='비밀번호'
              autoComplete='off'
              value={password}
              onChange={onPasswordHandler}
              required
            />
            <div className={styles.forget}>
              <Link to='/' className={styles.forgetTxt}>
                <p>비밀번호를 잊어버리셨나요?</p>
              </Link>
            </div>
            <Button
              type='submit'
              text='로그인'
              disabled={!(email !== '' && password !== '')}
            />
          </form>
        </div>
        <div className={styles.or}>
          <span>또는</span>
        </div>
        <div className={styles.socialGroup}>
          <Button
            text='카카오로 로그인'
            image='kakao'
            bg='#ffffff'
            color='#666666'
            border='1px solid #cccccc'
            onClick={kakaoLogin}
          />
          <Button
            text='구글로 로그인'
            image='google'
            bg='#ffffff'
            color='#666666'
            border='1px solid #cccccc'
            onClick={googleLogin}
          />
        </div>
        <div className={styles.footer}>
          <p>
            아직 계정이 없으신가요?{' '}
            <Link to='/signup' className={styles.intxt}>
              회원가입
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default SignIn;
