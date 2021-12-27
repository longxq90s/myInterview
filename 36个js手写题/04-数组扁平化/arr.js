let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9]]]

let result = []

function flat(arr) {
  for (let item in arr) {
    if (Array.isArray(item)) {
      flat(item)
    } else {
      result.push(+item)
    }
  }
  return result
}

let res = flat(arr)
console.log(res);