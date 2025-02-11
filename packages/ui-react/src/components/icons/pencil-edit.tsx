import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconPencilEdit = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 20v-7h-2v7H4V4h7V2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM19.178 2.723a2.454 2.454 0 0 0-3.483.002l-8.369 8.368c-.747.66-1.238 1.64-1.323 2.694L6 17.002v1h4.135c1.134-.078 2.124-.572 2.822-1.378l8.322-8.318a2.462 2.462 0 0 0 0-3.482l-2.1-2.1Zm-9.114 13.282c.534-.038 1.031-.287 1.43-.743L17.558 9.2l-2.755-2.755-6.106 6.105c-.405.358-.656.86-.696 1.318v2.135l2.064.002ZM16.217 5.03l2.754 2.755.894-.894a.462.462 0 0 0 0-.653L17.76 4.135a.456.456 0 0 0-.647 0l-.897.896Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconPencilEdit;
