export function splitArrayConverter<T>(array: T[], size: number): T[][] {
  return array?.reduce<T[][]>((result, item, index) => {
    const groupIndex = Math?.floor(index / size);
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex]?.push(item);
    return result;
  }, []);
}
