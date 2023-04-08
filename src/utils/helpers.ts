export function formatDate(date: Date, format: string) {
  const map: any = {
    mm: date.getMonth() + 1 < 10 ? date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
}
