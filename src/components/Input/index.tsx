import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  label: string;
  value?: string | number;
  name: string;
  onChange: (name: string, value: string) => void;
}

const Header: React.FC<Props> = ({ label, value, name, onChange }) => {
  const classes = useStyles();

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(name, event.target.value);
  };

  return (
    <TextField
      className={classes.input}
      label={label}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default Header;
