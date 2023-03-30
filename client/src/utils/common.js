const hexColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
const invertColor = (hex) => {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
};
export const placeholdColors = () => {
  const color = hexColor();
  return {
    text: `${color}`,
    backgroundColor: `${invertColor(color)}`
  };
};
export const srcsetGenerator = (breakpoint, needsSingleImage) => {
  let str1x = '';
  let str2x = '';
  if (breakpoint['1x']) {
    str1x = breakpoint['1x'];
  }
  if (breakpoint['2x']) {
    str2x = breakpoint['2x'] + ' 2x';
  }
  if (needsSingleImage || str2x.length === 0) {
    return str1x;
  } else {
    return `${str1x}, ${str2x}`;
  }
};
