import { makeStyles, CircularProgress } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import Container from '../Container';
import Header from '../Header';
import styles from './styles';

const useStyles = makeStyles(styles);

const Preloader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <div className={classes.preloader}>
        <img alt="Logo WTMI" src={UrlImages.logo} className={classes.image} />
        <CircularProgress color="secondary" />
      </div>
    </Container>
  );
};

export default Preloader;
