export const isEmpty = (dataToBeChecked) => {
  return (
    dataToBeChecked == false ||
    typeof dataToBeChecked === "undefined" ||
    dataToBeChecked == null ||
    (typeof dataToBeChecked === "object" && _isEmptyObject(dataToBeChecked))
  );
};

export const _isEmptyObject = (object) => {
    if (typeof object.length === "undefined") {
      // it's an Object, not an Array
      var hasNonempty = Object.keys(object).some(function nonEmpty(element) {
        return !isEmpty(object[element]);
      });
      return hasNonempty ? false : _isEmptyObject(Object.keys(object));
    }

    return !object.some(function nonEmpty(element) {
      // check if array is really not empty as JS thinks
      return !isEmpty(element); // at least one element should be non-empty
    });
  };