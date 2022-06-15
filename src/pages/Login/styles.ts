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
    },
    button: {
      marginTop: 15,
    },
  });

export default styles;
