import React, { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import './Button.scss';

export interface ButtonPropsBase {
  /** The color scheme for the button */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'defenders'
    | 'white';
  /** Whether or not the button is disabled */
  disabled?: boolean;
  /** The fit of the button. A "container" fit will make the button full width */
  fit?: 'container' | 'content';
  /** Whether or not the onClick function returns a promise */
  hasAsyncAction?: boolean;
  /** Style prop for use in pairs of inline buttons */
  inline?: 'left' | 'right';
  /** Click handler function */
  onClick?:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<any>);
  /** The size of the button. A size of "small" will use the default HTML button sizes */
  size?: 'small' | 'medium' | 'large';
  /** ref to button for easy reference as accessing a component directly isn't allowed */
  buttonRef?: React.LegacyRef<HTMLButtonElement>;
  /** Narrow padding */
  narrow?: boolean;
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonPropsBase;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'white',
  disabled,
  fit = 'container',
  hasAsyncAction,
  inline,
  onClick = () => {},
  size = 'medium',
  buttonRef,
  narrow = false,
  ...props
}) => {
  const [awaitingResolution, setAwaitingResolution] = useState(false);

  const isLoading = hasAsyncAction && awaitingResolution;
  const isDisabled = disabled || isLoading;
  const classNames = clsx(
    'base-button',
    size,
    narrow && 'narrow',
    inline,
    isDisabled && 'disabled',
    fit,
    color,
    className
  );
  const isCurrent = useRef(true);

  useEffect(
    () => () => {
      isCurrent.current = false;
    },
    []
  );

  const asyncOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAwaitingResolution(true);
    await onClick(e);
    if (isCurrent.current) setAwaitingResolution(false);
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      className={classNames}
      disabled={isDisabled}
      onClick={(e) => (hasAsyncAction ? asyncOnClick(e) : onClick(e))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
