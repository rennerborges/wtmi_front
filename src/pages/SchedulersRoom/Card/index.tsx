import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

import { ISchedulersRoom } from '../index';
import { MomentSpeed } from '../../../util/date';
const useStyles = makeStyles(styles);

interface Props {
  data: ISchedulersRoom;
}

const Card: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const initialHour = MomentSpeed(data.initialDate).format('HH:MM[h]');
  const finalHour = MomentSpeed(data.finalDate).format('HH:HH[h]');

  return (
    <article className={classes.card}>
      <div className={classes.bar}></div>
      <h1>{data.title}</h1>
      <div>
        <p>
          Horário: {initialHour} até {finalHour}
        </p>
      </div>
    </article>
  );
};

export default Card;
