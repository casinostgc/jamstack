export const chunkIntoN = (arr: any[], n: number) => {
  return Array.from({ length: n }, (v, i) => arr.slice(i * n, i * n + n))
}
