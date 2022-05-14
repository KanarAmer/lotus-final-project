
export const formatDate = (date_num: number): string => {
  const date = new Date(date_num)
  const 
    month = date.toLocaleString('default', { month: 'short' }),
    year = date.getFullYear(),
    day = date.getDate()
  return `${month} ${day}, ${year}`
}