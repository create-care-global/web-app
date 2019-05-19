import { TextField } from '@material-ui/core';
import { css, cx } from 'emotion';
import React from 'react';
import Paper from '../Paper';

interface Props {
  children?: React.ReactNode;
  className?: string;
  nChildren: number;
  dollarValue: number;
}

const rootClass = css``;

const ImpactCard: React.FunctionComponent<Props> = ({
  className,
  nChildren,
  dollarValue
}) => {
  return (
    <Paper className={cx([className, rootClass])}>
      <TextField disabled value={nChildren} label="Kid/s" />
      <TextField disabled value={`$${dollarValue}`} />
    </Paper>
  );
};

export default ImpactCard;
