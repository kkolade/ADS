const binarySearch = (arr, searchValue) => {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (searchValue === arr[midPoint]) {
      return midPoint;
    } else if (searchValue < arr[midPoint]) {
      upperBound = midPoint - 1;
    } else if (searchValue > arr[midPoint]) {
      lowerBound = midPoint + 1;
    }
  }
  return 'not found';
};

console.log(binarySearch([3, 17, 75, 80, 202], 80));
