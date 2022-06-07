import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';

const useStyles = makeStyles(styles);

const RegisterPresence: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <div>
        <Input
          name="email"
          label="E-mail"
          value={''}
          onChange={(name, value) => console.log(name, value)}
        />
      </div>
    </Container>
  );
};

export default RegisterPresence;
