let arr = [1, 2, 3, 5, 4, 3, 2, 5, 2, 5, 9, 10, 8, 9]

let newArr = [...new Set(arr)].sort((a, b) => a - b)

console.log(newArr);