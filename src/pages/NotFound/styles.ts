import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';

const styles = () =>
  createStyles({
    title: {
      color: 'red',
    },
    container: {
      padding: 20,
      boxSizing: 'border-box',
      color: palette.grayText,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 15,
    },
    imagem: {
      width: '100%',
      maxWidth: 400,
    },
  });

export default styles;
