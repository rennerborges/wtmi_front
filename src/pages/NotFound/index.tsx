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
import { UrlImages } from '../../util/images';

const useStyles = makeStyles(styles);

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <section className={classes.container}>
        <Title textAlign="center">Página não encontrada</Title>
        <img
          className={classes.imagem}
          alt="Página não encontrada"
          src={UrlImages.notFound}
        />
      </section>
    </Container>
  );
};

export default NotFound;
