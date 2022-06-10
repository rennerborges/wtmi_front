import { makeStyles, Button as ButtonMaterialUi } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({
  children,
  textAlign,
  disabled,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <ButtonMaterialUi
      className={classes.button}
      style={{ textAlign: textAlign || 'left' }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonMaterialUi>
  );
};

export default Button;
