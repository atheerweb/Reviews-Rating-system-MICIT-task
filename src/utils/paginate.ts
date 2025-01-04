export const paginate = <T>(array: T[], currentPage: number = 1, pageSize: number = 5) => {
  // Validate inputs
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array')
  }
  if (!array.length) {
    throw new Error('Array must not be empty')
  }
  if (currentPage < 1) {
    throw new Error('Current page must be greater than 0')
  }

  if (pageSize < 1) {
    throw new Error('Page size must be greater than 0')
  }
  
  // Calculate pagination bounds
  const startIndex = (currentPage - 1) * pageSize

  // validate bounds
  if (startIndex >= array.length) {
    throw new Error('Page not found')
  }

  const endIndex = startIndex + pageSize

  // Return paginated result
  return array.slice(startIndex, endIndex)
}
