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
      height: '100%',
      overflow: 'hidden',
      flexDirection: 'column',
    },
    button: {
      marginTop: 15,
    },
    containerCard: {
      overflow: 'auto',
      flex: '1',
      maxHeight: '100%',
    },
  });

export default styles;
