import { palette } from '@dfds-shared/colors';
export var Intent;

(function (Intent) {
  Intent[Intent["Primary"] = 0] = "Primary";
  Intent[Intent["Secondary"] = 1] = "Secondary";
  Intent[Intent["Success"] = 2] = "Success";
  Intent[Intent["Warning"] = 3] = "Warning";
  Intent[Intent["Danger"] = 4] = "Danger";
})(Intent || (Intent = {}));

export function getIntentColor() {
  var intent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Intent.Primary;

  switch (intent) {
    case Intent.Primary:
      return palette.primaryOrange;

    case Intent.Secondary:
      return palette.actionBlue;

    case Intent.Success:
      return palette.yesGreen;

    case Intent.Warning:
    case Intent.Danger:
      return palette.noRed;

    default:
      return palette.primaryOrange;
  }
}