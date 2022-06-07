import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
const useStyles = makeStyles(styles);

const RegisterPresence: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default RegisterPresence;
