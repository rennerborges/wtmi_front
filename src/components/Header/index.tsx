import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import styles from './styles';

const useStyles = makeStyles(styles);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src={UrlImages.whiteLogo}
        alt="Logo branca do WTMI"
      />
    </header>
  );
};

export default Header;
