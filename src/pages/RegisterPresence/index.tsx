import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import LabelParagraph from '../../components/LabelParagraph';
import Button from '../../components/Button';
import { ISchedulersRoom } from '../SchedulersRoom';
import { useParams } from 'react-router-dom';
import { GetScheduler, PostPresenceScheduler } from '../../api/wtmi';
import { AxiosError } from 'axios';
import Preloader from '../../components/Preloader';
import NotFound from '../../components/NotFound';
import { isValidEmail } from '../../util/email';
import { toast } from 'react-toastify';
import Success from '../../components/Success';
import Autocomplete from '../../components/Autocomplete';
import { useAuth } from '../../context/auth';

const useStyles = makeStyles(styles);

const RegisterPresence: React.FC = () => {
  const classes = useStyles();
  const { token, Logout } = useAuth();

  const { id: codeScheduler } = useParams();

  const [scheduler, setScheduler] = useState<ISchedulersRoom>();
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  async function getScheduler() {
    try {
      const { data } = await GetScheduler(String(codeScheduler), token);
      setIsLoading(false);
      setScheduler(data.scheduler);
    } catch (error: any | AxiosError) {
      setIsLoading(false);
      console.log(error?.response?.status);
      if (error?.response?.status === 401) {
        Logout();
      }
    }
  }

  async function postPresenceScheduler() {
    setEmail('');

    try {
      setIsLoading(true);
      await PostPresenceScheduler(String(codeScheduler), email, token);

      toast.success('Prensença cadastrada! 😎', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setIsLoading(false);
    } catch (error: any | AxiosError) {
      setIsLoading(false);
      const mensageError =
        error.response.data.message || error.response.data.response.message;

      if (
        mensageError === 'Usuário já registrou sua presença nessa palestra!'
      ) {
      }

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

  useEffect(() => {
    getScheduler();
  }, []);

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

    postPresenceScheduler();
  };

  const renderContent = () => {
    if (!scheduler) {
      return <NotFound />;
    }

    if (isSuccess) {
      return <Success title="Obrigado pela sua participação! 🥰" />;
    }

    return (
      <>
        <Title>{scheduler.title}</Title>
        <LabelParagraph label="Local"> {scheduler.location}</LabelParagraph>
        <Paragraph>
          Registre sua presença informando seu e-mail cadastrado na plataforma
          Even3
        </Paragraph>
        <Autocomplete
          name="email"
          label="E-mail"
          value={email}
          onChange={(name, value) => setEmail(value)}
          options={
            scheduler?.users?.map((item) => ({
              label: `${item.name} | ${item.email}`,
              value: item.email,
            })) || []
          }
          onBlur={isErrorEmail}
          error={errorEmail}
          errorMessage="Informe um e-mail válido"
        />
        <div className={classes.button}>
          <Button disabled={errorEmail} onClick={onSubmit}>
            Registrar
          </Button>
        </div>
      </>
    );
  };

  console.log(email);
  return (
    <Container>
      <Header />
      <section className={classes.container}>{renderContent()}</section>
    </Container>
  );
};

export default RegisterPresence;
