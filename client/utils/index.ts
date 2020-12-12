export function mergeClasses(classes: string[], classNames?: string): string {
  if (classNames) {
    classes.push(...classNames.split(' '))
  }
  return classes.join(' ')
}
