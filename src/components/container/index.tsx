import React, { ElementType, forwardRef, Ref } from 'react';

import { css } from '@styled-system/css/css';
import { SystemStyleObject } from '@styled-system/types/system-types';

interface Props {
  css?: SystemStyleObject;
  children?: React.ReactNode;
  as?: ElementType;
}

export const Container = forwardRef(
  (
    { css: cssProp, children, as: Tag = 'div' }: Props,
    myRef?: Ref<HTMLElement>
  ) => {
    return (
      <Tag ref={myRef} className={cssProp ? css(cssProp) : undefined}>
        {children}
      </Tag>
    );
  }
);
