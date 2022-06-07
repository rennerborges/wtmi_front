import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

const Title: React.FC<Props> = ({ children, textAlign }) => {
  const classes = useStyles();

  return (
    <h1 className={classes.title} style={{ textAlign: textAlign || 'left' }}>
      {children}
    </h1>
  );
};

export default Title;
