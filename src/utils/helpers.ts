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

export function fixNumber(number: string) {
  const val = Number.parseFloat(number);
  return isNaN(val) ? "" : val.toLocaleString("he-IL");
}
