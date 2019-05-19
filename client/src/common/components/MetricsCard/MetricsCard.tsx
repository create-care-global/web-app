// import { spacingRem } from 'common/helpers/spacing';
import { css, cx } from 'emotion';
import React from 'react';
import Paper from '../Paper';

interface Props {
  children?: React.ReactNode;
  className?: string;
  number: number;
  text: string;
}

const rootClass = css`
  display: flex;
  flex-flow: row nowrap;
  border: solid 2px #00b4cb;
  border-radius: 5px;
  justify-content: flex-start;

  span {
    padding: 20px;

    &:last-child {
      flex: 1 0 auto;
    }
  }
`;

const MetricsCard: React.FunctionComponent<Props> = ({
  className,
  number,
  text
}) => {
  return (
    <Paper>
      <div className={cx([className, rootClass])}>
        <span>How</span>
        <span>{number}</span>
        <span>{text}</span>
      </div>
    </Paper>
  );
};

export default MetricsCard;
