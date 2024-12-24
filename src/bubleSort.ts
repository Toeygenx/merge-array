function bubbleSort(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [...arr1, ...arr2];

  // bubble sort
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length - i - 1; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        const temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
      }
    }
  }

  return mergedArray;
}

export default bubbleSort;
