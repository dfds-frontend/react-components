import React from 'react';
import { Intent } from '../common/intent';
interface IProps {
    children?: React.ReactNode;
    className?: string;
    intent?: Intent;
}
export declare const Button: ({ children, className, intent }: IProps) => JSX.Element;
export {};
