// 防抖函数
function debounce(func,wait){
	let timer ;
	return function(fn){
		clearTimeout(timer)
		let _this = this
		let args = arguments
		timer = setTimeout(function(){
			func.apply(_this,args)	
		},wait)
	}
}

let btn = document.querySelector('.btn')
let getNum = document.querySelector('.num')

function changeNum(){
	let n = getNum.innerText
	n=+n+1
	getNum.innerText = n
}

btn.addEventListener('click',debounce(changeNum,3000))



