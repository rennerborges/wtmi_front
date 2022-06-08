import { createStyles } from '@material-ui/core';
import palette from '../../../theme/palette';

const styles = () =>
  createStyles({
    card: {
      width: '100%',
      boxShadow: palette.boxShadow,
      padding: '15px 15px',
      boxSizing: 'border-box',
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      '& h1': {
        margin: 0,
      },
      '& p': {
        margin: 0,
        marginTop: 10,
      },
      '&:not(:first-child)': {
        marginTop: 15,
      },
    },
    bar: {
      backgroundColor: palette.purple,
      width: 4,
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
  });

export default styles;
