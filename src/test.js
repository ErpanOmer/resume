const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}

const gen = testG()

const r1 = gen.next('1111')
console.log(r1)

r1.value.then(value => {
  console.log(value)
})

const r2 = gen.next('2222')
console.log(r2)

const r3 = gen.next('3333')
console.log(r3)
