import React, { forwardRef, Ref } from 'react';

import { css } from '@styled-system/css';
import { HTMLStyledProps, splitCssProps } from '@styled-system/jsx';
import { SystemStyleObject } from '@styled-system/types/system-types';

interface Props {
  styles?: SystemStyleObject;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export const StyledContainer = (props: HTMLStyledProps<'div'>) => {
  const [cssProps, restProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;

  const className = css(styleProps, cssProp);

  return <div {...restProps} className={className} />;
};

export const Container = forwardRef(
  ({ styles, children, as }: Props, ref?: Ref<HTMLDivElement>) => {
    return (
      <StyledContainer {...styles} ref={ref}>
        {children}
      </StyledContainer>
    );
  }
);
