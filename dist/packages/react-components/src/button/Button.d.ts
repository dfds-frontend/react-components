import React from 'react';
import { BaseButtonProps, ButtonVariationProps } from './BaseButton';
declare type ButtonProps = BaseButtonProps & ButtonVariationProps & {
    className?: string;
    replace?: boolean;
    submitting?: boolean;
    fillWidth?: boolean;
    icon?: React.ReactNode;
    iconAlign?: 'left' | 'right';
};
declare const Button: React.FC<ButtonProps>;
export default Button;
