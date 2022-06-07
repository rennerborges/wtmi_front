import { makeStyles, Button as ButtonMaterialUi } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

const Button: React.FC<Props> = ({ children, textAlign }) => {
  const classes = useStyles();

  return (
    <ButtonMaterialUi
      className={classes.button}
      style={{ textAlign: textAlign || 'left' }}
    >
      {children}
    </ButtonMaterialUi>
  );
};

export default Button;
