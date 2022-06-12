import { createStyles } from '@material-ui/core';
import palette from '../../../theme/palette';

const styles = () =>
  createStyles({
    card: {
      display: 'block',
      textDecoration: 'none',
      color: palette.grayText,
      width: '100%',
      boxShadow: palette.boxShadow,
      padding: '15px 15px',
      boxSizing: 'border-box',
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #eeee',
      '& h1': {
        margin: 0,
      },
      '& p': {
        margin: 0,
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
    contentInfo: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
    badgeNow: {
      height: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      fontSize: '0.7rem',
      minWidth: '20px',
      boxSizing: 'border-box',
      transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      alignItems: 'center',
      fontWeight: 500,
      lineHeight: '1',
      borderRadius: '10px',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 'fit-content',
      padding: '5px 10px',
      backgroundColor: 'pink',
      color: 'white',
      marginLeft: 10,
    },
  });

export default styles;
