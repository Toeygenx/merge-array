import bubleSort from "./bubleSort";

function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let merged1And2 = bubleSort(collection_1, collection_2);

  let finalMerged = bubleSort(merged1And2, collection_3);

  return finalMerged;
}

export default merge;
