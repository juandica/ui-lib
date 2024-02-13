import React from 'react';

import {
    CDSButton,
    CDSButtonSentiment,
    CDSButtonVariant,
    CDSButtonSize,
  } from '@ciscodesignsystems/cds-react-button';
  import '../index.scss';
  
  export type MagneticButtonTypes = {
    children: React.ReactNode;
    variant?: CDSButtonVariant;
    sentiment?: CDSButtonSentiment;
    size?: CDSButtonSize;
    icon?: React.ReactNode;
    block?: boolean;
  };
  export const MagneticButton: React.FC<MagneticButtonTypes> = ({
    children,
    ...props
  }) => {
    return <CDSButton {...props}>{children}</CDSButton>;
  };
  
  export default MagneticButton;