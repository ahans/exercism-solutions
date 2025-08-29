const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
export function decodedValue(colors) {
  return colors.slice(0, 2).reduce((acc, color) => 10 * acc + COLORS.indexOf(color), 0);
}