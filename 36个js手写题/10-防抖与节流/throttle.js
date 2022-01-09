// 在 一定时间 之内，限制 一个动作 只 执行一次 。

function throttle(fn,wait){
	let pre = Date.now()
	return function(){
		let _this = this 
		let args = arguments
		let now = Date.now()
		if(now - pre >= wait){
			fn.apply(_this,args)
			pre = Date.now()
		}
	}
}


function handle(){
	console.log((Math.random()*10).toFixed(2))
	let res = getNum.innerText
	res =( Math.random()*100).toFixed(2)
	getNum.innerText = res

}

let getNums = document.querySelector('.throNums')
let changeNums = document.querySelector('.throtBtn')

changeNums.addEventListener('click',throttle(handle,1000))


