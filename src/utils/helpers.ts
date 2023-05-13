export function formatDate(date: Date, format: string) {
  const map: any = {
    mm:
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1,
    dd: date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yyyy/gi, (matched) => map[matched]);
}

export function getCurrentDay() {
  const date = new Date(Date.now());
  return date.getDate();
}

export function getCurrentMonth() {
  const date = new Date(Date.now());
  return date.getMonth() + 1 < 10
    ? "0" + (date.getMonth() + 1)
    : "" + date.getMonth() + 1;
}

export function getPrevMonth() {
  const date = new Date(Date.now());
  date.setMonth(date.getMonth() - 1);
  return date.getMonth() + 1 < 10
    ? "0" + (date.getMonth() + 1)
    : "" + date.getMonth() + 1;
}

export function getPrevDayFullDate(dateStr: string) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return formatDate(date, "yyyy-mm-dd");
}

export function fixNumber(number: string) {
  const val = Number.parseFloat(number);
  return isNaN(val) ? "" : val.toLocaleString("he-IL") + " ₪";
}

export function getNumberFromString(value: string) {
  const parsedValue = Number.parseFloat(value);
  return isNaN(parsedValue) ? 0 : parsedValue;
}

export function getObjectDictionaryFromArray(
  arr: any,
  key: string,
  valueName: string
) {
  return arr.reduce((accumulator: any, value: any) => {
    return {
      ...accumulator,
      [value[key]]: getNumberFromString(value[valueName]),
    };
  }, {});
}

export function convertDataDateToDate(dataDate: string) {
  var dateParser = /(\d{2})\/(\d{2})\/(\d{4})/;
  var match = dataDate.match(dateParser);
  if (match != null) {
    return new Date(
      Number.parseInt(match[3]), // year
      Number.parseInt(match[2]) - 1, // monthIndex
      Number.parseInt(match[1]) // day
    );
  }
  return new Date();
}

export function isDateBefore(from: string, to: string) {
  const d1 = Date.parse(from);
  const d2 = Date.parse(to);
  if (d1 < d2) {
    return true;
  }
  return false;
}
