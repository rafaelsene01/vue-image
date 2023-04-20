const srcRoot = import.meta.url
export const img = (name: string) => {
  return new URL(`./assets/img/${name}`, srcRoot)
}
