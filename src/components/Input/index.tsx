import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  label: string;
  value?: string | number;
  name: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  type?: string;
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
}

const Header: React.FC<Props> = ({
  label,
  value,
  name,
  error,
  errorMessage,
  disabled,
  type,
  onChange,
  onBlur,
}) => {
  const classes = useStyles();

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(name, event.target.value);
  };

  return (
    <>
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
        error={error}
        onBlur={onBlur}
        disabled={disabled}
        onChange={onChangeInput}
        type={type || 'text'}
        name={name}
      />
      {error && errorMessage && <p className={classes.error}>{errorMessage}</p>}
    </>
  );
};

export default Header;
