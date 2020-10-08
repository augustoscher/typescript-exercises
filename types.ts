// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `isOpen: ${isOpen}`

//number (int, float, hexa, binario)
let total: number
total = 3
total = 40.99
total = 0xff0

// array (type[])
let items: number[]
items = [1, 2, 3, 4]

let letters: Array<string>
letters = ['a', 'b', 'c']

// tuple - array com tamanho e tipo definidos
let tup: [string, number, boolean]
tup = ['a', 1, true]

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa - não é legal)
let coisa: any
coisa = true
coisa = 1
coisa = 'S'

// void (vazio) não retorna nada 
// function logger(): void {
//   console.log('foo')
// }
function logger() {
  console.log('foo');
}

// null | undefined (mesma coisa)
type Bla = string | undefined

// never (nunca vai retornar)
// erros nunca retornam nada, só lançam exceção.
function error(): never {
  throw new Error('asd');
}

// object (tudo aqui que não é um tipo primitivo)
let obj: object
obj = {
  title: "adaasjdoi"
}

// Type inference
let str = "defined message"
// str = 1 number is not assignable to type string

let arr = [] //array de any
arr.push({ title: 'oi' })
arr.push(1)

window.addEventListener('click', (e: MouseEvent) => {
  console.log(e);
})

window.addEventListener('click', e => {
  console.log(e);
})