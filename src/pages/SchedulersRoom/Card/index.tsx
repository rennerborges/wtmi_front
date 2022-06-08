import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {}

const Card: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <article className={classes.card}>
      <div className={classes.bar}></div>
      <h1>Rocket Web - Uma jornada para o frontend</h1>
      <div>
        <p>Horário: 13h até 15h</p>
      </div>
    </article>
  );
};

export default Card;
