import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
  style?: React.CSSProperties;
}

const Title: React.FC<Props> = ({ children, textAlign, style }) => {
  const classes = useStyles();

  return (
    <h1
      className={classes.title}
      style={{ textAlign: textAlign || 'left', ...style }}
    >
      {children}
    </h1>
  );
};

export default Title;
