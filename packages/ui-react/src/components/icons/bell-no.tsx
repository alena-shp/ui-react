import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBellNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M19 14.78V9.996c0-4.057-2.238-6.873-5.134-7.719a2 2 0 0 0-3.73-.002A6.625 6.625 0 0 0 7.754 3.54L9.176 4.96A4.627 4.627 0 0 1 12 4.011c2.66 0 5 2.218 5 5.985 0 1.184.103 2.201.303 3.088L19 14.78Zm-4.912 7.633a3.94 3.94 0 0 0 1.786-2.407h2.718l2.701 2.701 1.414-1.414-20-20-1.414 1.414 4.194 4.195A9.6 9.6 0 0 0 5 9.996c0 2.633-.53 4.108-1.514 5.177-.164.18-.61.588-.911.866-.143.131-.254.233-.287.266L2 16.598v3.409h6.088c.206 1.062.782 1.772 1.824 2.407a4.01 4.01 0 0 0 4.176 0ZM7.125 8.54l9.468 9.468H4v-.562c.296-.27.749-.69.959-.919C6.294 15.073 7 13.113 7 9.996c0-.515.043-1.001.125-1.457Zm3.054 11.467h3.558c-.161.28-.393.52-.69.701a2.009 2.009 0 0 1-2.093 0c-.393-.24-.634-.438-.775-.701Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBellNo;
