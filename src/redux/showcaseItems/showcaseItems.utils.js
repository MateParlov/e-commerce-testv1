export const changeIndex = (arrayLength, num) => {
  const maxNum = arrayLength - 1;

  if (num > maxNum) {
    return 0;
  } else if (num < 0) {
    return maxNum;
  } else {
    return num;
  }
};
