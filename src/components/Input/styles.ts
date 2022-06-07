import { createStyles } from '@material-ui/core';
import palette from '../../theme/palette';
import { UrlImages } from '../../util/images';

const styles = () =>
  createStyles({
    input: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.grayText,
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.purple,
      },
      '& .MuiFormLabel-root': {
        color: palette.grayText,
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: palette.purple,
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.purple,
      },
    },
    logo: {
      height: '100%',
    },
    error: {
      color: 'red',
      margin: 0,
      fontSize: 13,
    },
  });

export default styles;
