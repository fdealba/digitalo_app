export const updateObject = (oldObject, updatedValuesObj) => {
  return {
    ...oldObject,
    ...updatedValuesObj
  }
}