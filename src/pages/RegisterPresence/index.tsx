import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import LabelParagraph from '../../components/LabelParagraph';
import Button from '../../components/Button';

const useStyles = makeStyles(styles);

const RegisterPresence: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <section className={classes.container}>
        <Title>Rocket Web - Uma jornada para o frontend</Title>
        <LabelParagraph label="Local"> Sala 1</LabelParagraph>
        <Paragraph>
          Registre sua presença informando seu e-mail cadastrado na plataforma
          Even3
        </Paragraph>
        <Input
          name="email"
          label="E-mail"
          value={''}
          onChange={(name, value) => console.log(name, value)}
        />
        <div className={classes.button}>
          <Button>Registrar</Button>
        </div>
      </section>
    </Container>
  );
};

export default RegisterPresence;
