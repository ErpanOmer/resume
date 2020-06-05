//
//  1. 用 es3 手写 func 和  bind
//

Function.prototype.bind = function () {
   // ....
}

function func () {
  // ...
}

func.bind(context, 1, 2)(3, 4)



//
//   3.counter()  和 new counter() 前十次打印分别是什么?
//
function counter () {
  let start = new Date()
  this.num = 0

  const time1 = setInterval(function () {
    this.num++
    const gap = new Date() - start
    console.log('time1', this.num, gap)
  }, 996)

  //  这里有一个同步操作 耗时 1024 ms

  const time2 = setTimeout(() => {
    this.num++
    const gap = new Date() - start
    console.log('time2', this.num, gap)
  }, 0)
}
