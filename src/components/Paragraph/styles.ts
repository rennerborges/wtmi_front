import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';
import { UrlImages } from '../../util/images';

const styles = () =>
  createStyles({
    paragraph: {
      color: palette.grayText,
      fontSize: 16,
      fontWeight: 300,
      lineHeight: '27px',
    },
  });

export default styles;