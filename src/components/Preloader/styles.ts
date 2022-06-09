import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';

const styles = () =>
  createStyles({
    preloader: {
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiCircularProgress-colorSecondary': {
        color: palette.pinkLogo,
      },
    },
    image: {
      width: 40,
      marginBottom: 40,
    },
  });

export default styles;
