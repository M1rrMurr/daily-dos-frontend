export const formatDate = function(date: string | Date): string {
    const options = { hour: '2-digit', minute: '2-digit' }
    const dateString = typeof date == "string" ? new Date(date).toLocaleTimeString([], options) : date.toLocaleTimeString([], options)
    return dateString
}
