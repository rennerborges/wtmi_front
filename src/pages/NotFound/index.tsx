import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { UrlImages } from '../../util/images';

const useStyles = makeStyles(styles);

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <section className={classes.container}>
        <Title style={{ margin: 0, marginBottom: 20 }}>Atenção</Title>
        <img
          className={classes.imagem}
          alt="Página não encontrada"
          src={UrlImages.notFound}
        />
        <Paragraph style={{ margin: 0 }}>Página não encontrada</Paragraph>
      </section>
    </Container>
  );
};

export default NotFound;
