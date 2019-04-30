export declare enum Intent {
    Primary = 0,
    Secondary = 1,
    Success = 2,
    Warning = 3,
    Danger = 4
}
export declare function getIntentColor(intent?: Intent): {
    primary: string;
    hover: string;
    medium: string;
};
