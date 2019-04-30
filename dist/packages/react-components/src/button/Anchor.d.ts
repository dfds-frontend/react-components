import * as React from 'react';
import { ButtonVariationProps } from './BaseButton';
declare type AnchorProps = React.PropsWithoutRef<JSX.IntrinsicElements['a']> & ButtonVariationProps;
declare const Anchor: (props: AnchorProps) => JSX.Element;
export default Anchor;
