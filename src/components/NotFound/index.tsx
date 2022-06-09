import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import Title from '../Title';
import styles from './styles';

const useStyles = makeStyles(styles);

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <article className={classes.notFound}>
      <Title textAlign="center">Nenhuma informação encontrada</Title>
      <img alt="Não encontrado" className={classes.img} src={UrlImages.error} />
    </article>
  );
};

export default NotFound;
