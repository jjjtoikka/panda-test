import React, { forwardRef, Ref } from "react";

import { css } from "@styled-system/css";
import { HTMLStyledProps, splitCssProps } from "@styled-system/jsx";
import { SystemStyleObject } from "@styled-system/types/system-types";

interface Props {
  styles?: SystemStyleObject;
  css?: SystemStyleObject;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export const StyledContainer = (props: HTMLStyledProps<"div">) => {
  const [cssProps, restProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;

  const className = css(styleProps, cssProp);
  console.log({ styleProps, cssProp });

  return <div {...restProps} className={className} />;
};

export const Container = forwardRef(
  ({ styles, children, css, as }: Props, ref?: Ref<HTMLDivElement>) => {
    return (
      <StyledContainer {...styles} css={css} ref={ref}>
        {children}
      </StyledContainer>
    );
  }
);
