import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
}

const Paragraph: React.FC<Props> = ({ children, textAlign }) => {
  const classes = useStyles();

  return (
    <p className={classes.paragraph} style={{ textAlign: textAlign || 'left' }}>
      {children}
    </p>
  );
};

export default Paragraph;
