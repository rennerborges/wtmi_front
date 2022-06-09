import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';

const styles = () =>
  createStyles({
    container: {
      width: '100%',
      maxWidth: 500,
      height: '100%',
      backgroundColor: palette.graySuperLight,
      display: 'flex',
      flexDirection: 'column',
    },
  });

export default styles;
