export default function validation(titleElement, authorElement){
  if (titleElement === '' || authorElement === '') { return false }
  return true
}