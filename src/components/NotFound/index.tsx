import { makeStyles } from '@material-ui/core';
import React from 'react';
import { UrlImages } from '../../util/images';
import Paragraph from '../Paragraph';
import Title from '../Title';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  title?: string;
  urlImage?: string;
}

const NotFound: React.FC<Props> = ({ title, urlImage }) => {
  const classes = useStyles();

  return (
    <article className={classes.notFound}>
      <Title style={{ margin: 0, marginBottom: 20 }}>Atenção</Title>
      <Paragraph style={{ margin: 0 }}>
        {title || 'Nenhuma informação foi encontrada.'}
      </Paragraph>
      <img
        alt="Não encontrado"
        className={classes.img}
        src={urlImage || UrlImages.empty}
      />
    </article>
  );
};

export default NotFound;
