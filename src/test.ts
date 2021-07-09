// class Animal {
//     readonly name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     run() {
//         return `${this.name} is running`
//     }
// }

// const snake = new Animal('lily')
// console.log(snake.run())

// class Dog extends Animal {
//     bark() {
//         return `${this.name} is barking`
//     }
// }

// const xiaobao = new Dog('xiaobao')
// console.log(xiaobao.run())
// console.log(xiaobao.bark())

// class Cat extends Animal {
//     static categories = ['mammal']
//     constructor(name: string) {
//         super(name)
//         console.log(this.name)
//     }
//     run() {
//         return 'Meow,' +super.run()
//     }
// }

// const maomao = new Cat('maomao')
// console.log(maomao.run())
// console.log(Cat.categories)  //不需要实例化，直接类上面调用

// interface Radio {
//     switchRadio(trigger: boolean): void
// }

// interface Battery {
//     checkBatteryStatus(): void
// }

// interface RadioWithBattery extends Radio { 
//     checkBatteryStatus(): void
// }

// class Car implements Radio{
//     switchRadio(trigger: boolean) {

//     }
// }

// class Cellphone implements RadioWithBattery{
//     switchRadio(trigger: boolean) {
        
//     }
//     checkBatteryStatus(): void {

//     }
// }

// const enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }

// const value = 'UP'
// if(value === Direction.Up) {
//     console.log('go up!');
    
// function echo<T>(arg:T):T {
//     return arg
// }

// const result = echo(true)

// function swap<T,U>(tuple:[T,U]): [U,T] {  
//     return [tuple[1],tuple[0]]
// }

// const result2 = swap(['string',123])

// function echoWithArr<T>(arg: T[]): T[] {
//     console.log(arg.length)
//     return arg
// }

// const arrs = echoWithArr([1,3,2])

// interface IWithLength {
//     length: number
// }

// function echoWithLength<T extends IWithLength>(arg: T): T {
//     console.log(arg.length)
//     return arg
// }

// const str = echoWithLength('str')
// const arr = echoWithLength([1,3,2])
// const obj = echoWithLength({length: 10})

// class Queue<T> {
//     private data = [];
//     push(item: T) {
//         return this.data.push(item)
//     }
//     pop(): T{
//         return this.data.shift()
//     }
// }

// const queue = new Queue<number>()
// queue.push(1)
// console.log(queue.pop().toFixed());

// interface KeyPair<T,U> {
//     key:  T
//     value: U
// }


// let kp1: KeyPair<number,string> = {
//     key: 1,
//     value: 'string'
// }

// let kp2: KeyPair<string,number> = {
//     key: 'string',
//     value: 2
// }

// let arr:number[] = [1,2,3]
// let arrTwo: Array<number> = [1,2,3]

//type aliase
// let sum: (x: number, y:number) => number = (x,y) => x+y
// const result = sum(1, 2)
// type PlusType = (x: number, y:number) => number
// let sum2: PlusType = (x,y) => x+y
// const reault2 = sum2(2, 3)
// type StrOrNumber = string | number
// let result3: StrOrNumber = '123'
// result3 = 123

// const str: 'name' = 'name'
// const number: 1 = 1
// type Directions = 'Up' | 'Down' | 'Left' | 'Right'
// let toWhere: Directions = 'Left'
// interface IName {
//     name: string
// }
// type IPerson = IName & { age: number }
// let person: IPerson = { name: '123', age: 123}

// const a: Array<number> = [1,2,3]

// interface IPerson {
//     name: string
//     age: number
// }

// let viking: IPerson = {
//     name: 'viking',
//     age: 23
// }

// type IPartial = Partial<IPerson>
// let viking2: IPartial = { name: 'viking'}

// type IOmit = Omit<IPerson, 'name'>
// let viking3: IOmit = { age: 23 } 

// interface Props {
//     a?: number;
//     b?: string;
// }

// const obj: Props = { a: 5 }
// const obj2: Required<Props> = { a: 5, b: '123' };

// interface Todo {
//     title: string;
// }

// const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
// }

// todo.title = 'hello'

// interface CatInfo {
//     age: number;
//     breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred"

// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 10, breed: "Persian" },
//     boris: { age: 5, breed: "Maine Coon" },
//     mordred: { age: 16, breed: "British Shorthair" },
// }

// type Coord = Record<'X' | 'Y', number>
// 等同于
// type Coord = {
//     x: number;
//     y:number
// }

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// }

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }

// type TodoPreview = Omit<Todo, 'description'>

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     createdAt: 1165707819,
// }

// type TodoInfo = Omit<Todo, 'completed' | 'createdAt'> 

// const todo1: TodoInfo = {
//     title: "Clean room",
//     description: '11111'
// }

