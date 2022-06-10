import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';

const styles = () =>
  createStyles({
    button: {
      backgroundColor: palette.purple,
      width: '100%',
      height: 50,
      color: '#FFF',
      fontSize: 16,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: palette.purple,
      },
      '&.MuiButton-root.Mui-disabled': {
        color: palette.grayText,
        backgroundColor: palette.grayDisable,
      },
    },
  });

export default styles;
