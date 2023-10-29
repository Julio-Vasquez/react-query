export const Sleep = (time: number = 5): Promise<boolean> =>
  new Promise(resolve => setTimeout(() => resolve(true), time * 1000))
