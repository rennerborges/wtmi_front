import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
  style?: React.CSSProperties;
}

const Paragraph: React.FC<Props> = ({ children, textAlign, style }) => {
  const classes = useStyles();

  return (
    <p
      className={classes.paragraph}
      style={{ textAlign: textAlign || 'left', ...style }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
