export function getDayNum(date: string | Date) {
    const dayNum = typeof date == "string" ? new Date(date).getDay() : date.getDay()
    return dayNum === 0 ? 7 : dayNum
}
