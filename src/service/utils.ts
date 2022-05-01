function toYearMonthDay(date: Date) {
  return date.toISOString().split("T")[0];
}
export function todaysDateRange() {
  const today = new Date();
  const tomorrow = new Date(today.getDate() + 1);
  return [toYearMonthDay(today), toYearMonthDay(tomorrow)];
}
