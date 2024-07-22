import _dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";

const dayjs = _dayjs;

dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export { dayjs };
