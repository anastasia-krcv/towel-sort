module.exports = function towelSort (matrix) {
  let newArr = [];
  if (typeof matrix === 'undefined' || matrix.length === 0) {
    return [];
  }
  newArr = matrix.filter((item, index) => index % 2 == 0 ? newArr.push(item) : newArr.push(item.reverse()));
  return newArr.reduce((prev, next) => prev.concat(next));
}
