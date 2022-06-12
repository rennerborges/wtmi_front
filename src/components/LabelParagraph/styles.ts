import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';

const styles = () =>
  createStyles({
    paragraph: {
      color: palette.grayText,
      fontSize: 16,
      fontWeight: 300,
    },
    label: {
      color: palette.grayText,
      fontSize: 16,
      fontWeight: 500,
      marginRight: 5,
    },
  });

export default styles;
