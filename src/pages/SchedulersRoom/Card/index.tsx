import { Badge, makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

import { ISchedulersRoom } from '../index';
import { IsBetween, MomentSpeed } from '../../../util/date';
import palette from '../../../theme/palette';
const useStyles = makeStyles(styles);

interface Props {
  data: ISchedulersRoom;
  isAuth: boolean;
}

const Card: React.FC<Props> = ({ data, isAuth }) => {
  const classes = useStyles();
  const initialHour = MomentSpeed(data.initialDate).format('HH:mm[h]');
  const finalHour = MomentSpeed(data.finalDate).format('HH:mm[h]');
  const dateNow = MomentSpeed();

  const currentNow = IsBetween(dateNow, data.initialDate, data.finalDate);
  const passed = MomentSpeed(data.finalDate).isBefore(dateNow);

  const isClick = (currentNow || passed) && isAuth;

  const getColor = () => {
    if (passed) {
      return palette.red;
    }

    if (currentNow) {
      return palette.green;
    }

    return palette.purple;
  };

  return (
    <a
      href={`/scheduler/${data.code}`}
      className={classes.card}
      style={{
        cursor: isClick ? 'pointer' : 'text',
        pointerEvents: isClick ? 'auto' : 'none',
      }}
    >
      <div
        className={classes.bar}
        style={{ backgroundColor: getColor() }}
      ></div>
      <h1>{data.title}</h1>
      <div className={classes.contentInfo}>
        <p>
          Horário: {initialHour} até {finalHour}
        </p>
        {currentNow && (
          <div
            className={classes.badgeNow}
            style={{ backgroundColor: palette.green }}
          >
            Agora
          </div>
        )}
        {passed && (
          <div
            className={classes.badgeNow}
            style={{ backgroundColor: palette.red }}
          >
            Encerrando
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
