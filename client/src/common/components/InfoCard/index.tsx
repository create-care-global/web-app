
//import { spacingRem } from 'common/helpers/spacing';

import { css, cx } from 'emotion';
import React from 'react';
import Paper from '../Paper';

interface Props {
    children?: React.ReactNode;
    className?: string;
    title: string;
}

const rootClass = css`
    padding: 0; 
    height: 100%; 
    display: flex; 
    flex-flow: column nowrap; 
`;

const titleClass = css`
    padding: 1em; 
    flex: 0 0 60px; 
`;

const bodyClass = css`
    padding: 1em; 
    background-color: #ccc !important; 
    flex: 1 0 auto;

`;

const InfoCard: React.FunctionComponent<Props> = ({ className, title, children }) => {
    return (
        <Paper
            className={cx([className, rootClass])}

        >
            <Paper className={cx([titleClass])}
                elevation={0}
            >
                {title}
            </Paper>
            <Paper className={cx([className, bodyClass])}
                elevation={0}>
                {children}
            </Paper>

        </Paper>
    );
};

export default InfoCard;
