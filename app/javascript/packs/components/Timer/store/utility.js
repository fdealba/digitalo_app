export const updateTimer = (oldObject, updatedValuesObj) => {
  return {
    ...oldObject,
    timer: {
      ...updatedValuesObj
    }
  }
}

export const updateObject = (oldObject, updatedValuesObj) => {
  return {
    ...oldObject,
    ...updatedValuesObj
  }
}