function typeOf(obj) {
	const res = Object.prototype.toString.call(obj).split(' ')[1]
	// console.log(res);
	const result = res.substring(0, res.length - 1)
	console.log(result);
}

typeOf([])