import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';
import { UrlImages } from '../../util/images';

const styles = () =>
  createStyles({
    header: {
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      boxSizing: 'border-box',
      background: `${palette.gradientHeader}, url('${UrlImages.backgroundHeader}')`,
      backgroundPosition: 'right',
      backgroundSize: 'cover',
    },
    logo: {
      height: '100%',
    },
  });

export default styles;
