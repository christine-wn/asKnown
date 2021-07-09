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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down);
