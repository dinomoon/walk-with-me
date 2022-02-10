import Logo from '../../components/Header/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './PasswordFind.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const PasswordFind = () => {
  const [email, setEmail] = useState('');
  const [chkEmail, setChkEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  const emailHandler = (event) => {
    const emailPattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const currentEmail = event.currentTarget.value;
    setEmail(currentEmail);

    if (!emailPattern.test(currentEmail)) {
      setEmailMessage('이메일 형식이 유효하지 않습니다.');
      setChkEmail(false);
      return;
    }
    setEmailMessage('올바른 이메일 형식입니다!');
    setChkEmail(true);
  };

  const apiCall = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/find-password',
        {
          email,
        }
      );
      alert(response.data.success);
    } catch (err) {
      alert('존재하지 않는 이메일입니다.');
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    apiCall();
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logoArea}>
          <Logo type='col' />
        </div>
        <article className={styles.content}>
          <form method='POST' onSubmit={onSubmitHandler}>
            <Input
              type='email'
              name='email'
              placeholder='이메일'
              autoComplete='off'
              value={email}
              onChange={emailHandler}
              marginBottom='1rem'
              required
            />
            {email.length > 0 && (
              <div className={styles.txtArea}>
                <div className={chkEmail ? styles.success : styles.error}>
                  {emailMessage}
                </div>
              </div>
            )}
            <Button
              type='submit'
              text='임시비밀번호 발급'
              disabled={!chkEmail}
            />

            <Link className={styles.goToSign} to='/signin'>
              로그인 페이지로 가기
            </Link>
          </form>
        </article>
      </div>
    </div>
  );
};

export default PasswordFind;
