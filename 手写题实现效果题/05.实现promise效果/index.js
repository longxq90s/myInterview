function myPromise(fn){
	// promise的初始状态
	this.myPromiseStatus = 'pedding'
	this.myPromiseValue = undefined
	let resolve = function(value){
		let _this = this
		if(_this.myPromiseStatus === 'pedding'){
			_this.myPromiseStatus = 'fullfilled'
			_this.myPromiseValue = value
		}
	}
	let reject = function(errValue){	
		if(_this.myPromiseStatus === 'pedding'){
			_this.myPromiseStatus = 'rejected'
			_thsi.myPromiseValue = errValue 
		}
	}
	myPromise.prototype.then = function(func){
		func.apply()
	}
	if(fn){
		fn(resolve,reject)
	}
}


let res= new myPromise((resolve,reject)=>{
	resolve('这是第一个resolve')
}).then( res =>{
	console.log(res)
})








