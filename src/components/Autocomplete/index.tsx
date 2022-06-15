import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import AutocompleteMaterialUI from '@material-ui/lab/Autocomplete';
import styles from './styles';

const useStyles = makeStyles(styles);

export interface AutocompleteOption {
  label: string;
  value: string;
}

interface Props {
  label: string;
  value?: string | number;
  name: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  options: AutocompleteOption[];
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
}

const Autocomplete: React.FC<Props> = ({
  label,
  value,
  name,
  error,
  errorMessage,
  disabled,
  options,
  onChange,
  onBlur,
}) => {
  const classes = useStyles();

  const onChangeInput = (value: AutocompleteOption) => {
    onChange(name, value?.value);
  };

  return (
    <>
      <AutocompleteMaterialUI
        onChange={(event, newValue) => {
          onChangeInput(newValue as AutocompleteOption);
        }}
        inputValue={value ? String(value) : ''}
        getOptionLabel={(option) => option.label}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.input}
            label={label}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            error={error}
            onBlur={onBlur}
            onChange={({ target: { value } }) =>
              onChangeInput({ value } as AutocompleteOption)
            }
            disabled={disabled}
          />
        )}
      />

      {error && errorMessage && <p className={classes.error}>{errorMessage}</p>}
    </>
  );
};

export default Autocomplete;
