export function randomPicker<T>(elements: T[]): T | null {
    if (!elements.length) return null
    return elements[Math.floor(Math.random() * elements.length)]!
}
