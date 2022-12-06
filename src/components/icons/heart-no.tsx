import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconHeartNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M2.414 1.293 1 2.707l1.439 1.44C1.31 5.414.643 7.155.643 9.12c0 3.047 1.756 5.984 5.023 8.822 1.713 1.487 3.9 2.96 5.466 3.742l.868.434.868-.434c1.23-.615 2.845-1.657 4.312-2.797l3.82 3.82 1.414-1.414-20-20Zm13.34 16.168L3.856 5.564c-.764.9-1.213 2.135-1.213 3.556 0 2.37 1.463 4.818 4.334 7.311 1.579 1.371 3.61 2.74 5.023 3.451 1.054-.53 2.455-1.429 3.754-2.42Zm5.603-8.341c0 1.849-.89 3.744-2.644 5.672l1.415 1.415c2.111-2.296 3.229-4.656 3.229-7.087 0-3.987-2.834-7.105-6.642-7.12-1.49 0-2.446.17-3.545.69-.42.199-.815.44-1.18.722a6.514 6.514 0 0 0-1.135-.69C9.735 2.187 8.728 2 7.292 2c-.433 0-.852.04-1.256.115l1.902 1.902c.804.047 1.396.195 2.055.51.486.232.915.538 1.285.92l.724.745.717-.752a4.37 4.37 0 0 1 1.305-.942c.8-.378 1.474-.498 2.687-.498 2.66.01 4.646 2.196 4.646 5.12Z" clipRule="evenodd" />
    </SVG>
);

export default IconHeartNo;
