/**
 * @description Convert Date
 * @author Agung Wijaya <mdc.co.id>
 * @date 2021-20-04
 * @export
 * @param {obj} [obj=object]
 * @returns
 */
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
