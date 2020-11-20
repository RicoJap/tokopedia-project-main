/**
 * toTitleCase Function
 *
 * @since  16/11/2020
 * @access (public)
 *
 * @type     toTitleCase Function
 * @description Returns the title case of the value that is passed
 * @param {String}  str  String that wants to be converted to title case
 *
 */
export const toTitleCase = (str) => {
  if (!!str)
    return str
      .replace(/([^A-Z])([A-Z])/g, "$1 $2") // split cameCase
      .replace(/[_\-]+/g, " ") // split snake_case and lisp-case
      .toLowerCase()
      .replace(/(^\w|\b\w)/g, function (m) {
        return m.toUpperCase();
      }) // title case words
      .replace(/\s+/g, " ") // collapse repeated whitespace
      .replace(/^\s+|\s+$/, ""); // remove leading/trailing whitespace
};
