import { createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    success: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {
      width: '100%',
      maxWidth: 300,
    },
  });

export default styles;
