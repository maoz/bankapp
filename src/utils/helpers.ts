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

export function fixNumber(number: string) {
  const val = Number.parseFloat(number);
  return isNaN(val) ? "" : val.toLocaleString("he-IL");
}
