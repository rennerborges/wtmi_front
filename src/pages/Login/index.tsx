import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';

import { PostLogin } from '../../api/wtmi';
import { AxiosError } from 'axios';
import Preloader from '../../components/Preloader';
import Input from '../../components/Input';
import { isValidEmail } from '../../util/email';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const useStyles = makeStyles(styles);

const Login: React.FC = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const { Login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  async function postLogin() {
    try {
      setIsLoading(true);
      const { data } = await PostLogin(email, password);

      Login(data.token);

      toast.success('Login realizado! 😎', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      window.location.pathname = '/';
    } catch (error: any | AxiosError) {
      setIsLoading(false);
      const mensageError =
        error.response.data.message || error.response.data.response.message;

      toast.error(mensageError, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  if (isLoading) {
    return <Preloader />;
  }

  const isErrorEmail = (): boolean => {
    if (!isValidEmail(email)) {
      setErrorEmail(true);
      return true;
    }

    if (errorEmail) {
      setErrorEmail(false);
    }

    return false;
  };

  const onSubmit = () => {
    if (isErrorEmail()) {
      return;
    }

    if (!password) {
      return setErrorPassword(true);
    } else if (errorPassword) {
      setErrorPassword(false);
    }

    postLogin();
  };

  return (
    <Container>
      <Header />
      <section className={classes.container}>
        <Title>Login</Title>
        <Paragraph>Entre para ter o acesso da comissão</Paragraph>
        <Input
          name="email"
          label="E-mail"
          value={email}
          onChange={(name, value) => setEmail(value)}
          onBlur={isErrorEmail}
          error={errorEmail}
          errorMessage="Informe um e-mail válido"
        />
        <Input
          name="password"
          label="Senha"
          value={password}
          onChange={(name, value) => setPassword(value)}
          error={errorPassword}
          errorMessage="Informe uma senha"
          type="password"
        />
        <div className={classes.button}>
          <Button disabled={errorEmail} onClick={onSubmit}>
            Registrar
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Login;
