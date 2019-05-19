// import { spacingRem } from 'common/helpers/spacing';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
    className?: string;
}

const rootClass = css`
    width: 0; 
    height: 0; 
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;    
    border-left: 60px solid #00A9C2;
    color: black; 
`;

const spanClass = css`
    position: relative; 
    left: -60px; 
    top: -20px; 
    color: white; 
`;

const HelpsTriangle: React.FunctionComponent<Props> = ({ className, }) => {
    return (
        <div
            className={cx([className, rootClass])}

        >

                <span className={cx([className, spanClass])}>HELPS</span>
        </div>
    );
};

export default HelpsTriangle;
