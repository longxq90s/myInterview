let arrs = [1, 2, 3, 4, 5, [6, 7, 8, [9]]]


function flat(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

let res = flat(arrs)
console.log(res);