export const findMaxElement = (arr: Array<Array<string | number>>) => {
  let max: number = 0;
  let tag: string = "";
  return arr.reduce(
    (_, item) => {
      const tagName = item[0] as string;
      const tagCount = item[1] as number;
      if (tagCount > max || tagCount === max) {
        tag = tagName;
        max = tagCount;
      }
      return { tag, amount: max };
    },
    { tag: "", amount: 0 }
  );
};
