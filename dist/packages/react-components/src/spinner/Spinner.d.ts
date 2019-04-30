import React from 'react';
declare type Props = {
    instant?: boolean;
    size?: string;
    className?: string;
};
declare function Spinner({ instant, size, className }: Props): JSX.Element;
declare namespace Spinner {
    var displayName: string;
}
export declare const CenteredSpinner: import("@emotion/styled-base").StyledComponent<Props & React.Attributes, Pick<Props & React.Attributes, "size" | "className" | "instant">, any>;
export default Spinner;
