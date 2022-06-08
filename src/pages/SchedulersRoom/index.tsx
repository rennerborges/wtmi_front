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
import Card from './Card';

const useStyles = makeStyles(styles);

const SchedulersRoom: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <section className={classes.container}>
        <Title style={{ margin: 0, marginBottom: 10 }}>Palestras sala 3</Title>
        <LabelParagraph label="Data" style={{ marginTop: 0 }}>
          21/06/2022
        </LabelParagraph>

        <section>
          {[...new Array(3)].map((scheduler) => (
            <Card />
          ))}
        </section>
      </section>
    </Container>
  );
};

export default SchedulersRoom;
