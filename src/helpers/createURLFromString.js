export const createURLFromString = str => {
  // Replace any spaces with dashes and convert the string to lowercase
  const url = str.replace(/\s+/g, '-').toLowerCase()
  return url
}
