import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';
import { UrlImages } from '../../util/images';

const styles = () =>
  createStyles({
    title: {
      color: palette.grayText,
      fontSize: 25,
    },
  });

export default styles;
