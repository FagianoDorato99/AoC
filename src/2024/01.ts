export default function resolve(input: string): number[] {
  const a: number[] = [], b: number[] = [];
  let result1 = 0, result2 = 0;

  input.split("\n").forEach((line) => {
    const temp = line.split("   ");
    a.push(parseInt(temp[0]));
    b.push(parseInt(temp[1]));
  });

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i += 1) {
    const temp = a[i] - b[i];
    result1 += temp < 0 ? -temp : temp;
    result2 += a[i] * b.filter((item) => item === a[i]).length;
  }

  return [result1, result2];
}
