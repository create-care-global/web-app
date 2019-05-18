import React from 'react';
import Text from 'common/components/Text';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// This is a hack - need cleanup

const InputFeedback = ({ error }) => (error ? <div>{error}</div> : null);

export const RadioButtonGroup = ({ error, touched, children }) => {
  return (
    <div>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  );
};

export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <Grid container>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <Box ml={1} />
      <Text>{label}</Text>
    </Grid>
  );
};
