import { css, cx } from 'emotion';
import React from 'react';
import Paper from '../Paper';
import { TextField } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  className?: string;
  nChildren :number; 
  dollarValue: number; 
}

const rootClass = css`

`;

const ImpactCard: React.FunctionComponent<Props> = ({ className, 
    nChildren, 
    dollarValue, 
}) => {
  return (
    <Paper
      className={cx([className, rootClass])}

    >
        <TextField disabled value = {nChildren} label ="Kid/s"></TextField>
        <TextField disabled value = {dollarValue} ></TextField>
    </Paper>
  );
};

export default ImpactCard;
