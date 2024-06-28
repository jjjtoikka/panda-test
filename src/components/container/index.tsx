import React, { ElementType, forwardRef, Ref } from 'react';

import { css } from '@styled-system/css/css';
import { cx } from '@styled-system/css/cx';
import { grid, GridStyles } from '@styled-system/patterns';
import { SystemStyleObject } from '@styled-system/types/system-types';

interface CommonProps {
  id?: string;
  css?: SystemStyleObject;
  cssClass?: string;
  children?: React.ReactNode;
  as?: ElementType;
}

interface GridProps extends CommonProps {
  css: GridStyles;
}

export const Grid = ({ as, css: cssProp, children }: GridProps) => {
  // both ways no actual css styles are shwon only class names
  return (
    <Container as={as} css={grid.raw(cssProp)} cssClass={grid(cssProp)}>
      {children}
    </Container>
  );
};

interface ContainerProps extends CommonProps {}

export const Container = forwardRef(
  (
    { id, css: cssProp, cssClass, children, as: Tag = 'div' }: ContainerProps,
    myRef?: Ref<HTMLElement>
  ) => {
    const className = cx(css(cssProp), cssClass);

    return (
      <Tag ref={myRef} id={id} className={className ? className : undefined}>
        {children}
      </Tag>
    );
  }
);
