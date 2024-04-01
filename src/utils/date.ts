export function getISODate(date: Date): string {
  return date.toISOString().split("T")[0]
}
