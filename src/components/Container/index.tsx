import { makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
