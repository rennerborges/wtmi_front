import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  children: React.ReactNode;
  label: string;
  textAlign?: 'center' | 'left' | 'right';
}

const LabelParagraph: React.FC<Props> = ({ children, textAlign, label }) => {
  const classes = useStyles();

  return (
    <p className={classes.paragraph} style={{ textAlign: textAlign || 'left' }}>
      <span className={classes.label}>{label}:</span>
      {children}
    </p>
  );
};

export default LabelParagraph;
