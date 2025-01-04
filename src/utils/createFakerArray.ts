export const createFakerArray = <T>(N: number, fakerDataConstructor: () => T): T[] => {
  const array = []

  for (let i = 1; i <= N; i++) {
    array.push(fakerDataConstructor())
  }

  return array
}
