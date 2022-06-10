import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import Title from '../Title';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  title: string;
}

const Success: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <article className={classes.success}>
      <Title textAlign="center">{title}</Title>
      <img
        alt="Não encontrado"
        className={classes.img}
        src={UrlImages.success}
      />
    </article>
  );
};

export default Success;
