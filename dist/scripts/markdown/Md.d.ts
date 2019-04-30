/// <reference types="react" />
declare const Markdown: ({ source, children, ...rest }: {
    source?: any;
    children: import("react").ReactNode;
}) => JSX.Element;
export declare const Md: (strings: TemplateStringsArray, ...values: string[]) => JSX.Element;
export default Markdown;
