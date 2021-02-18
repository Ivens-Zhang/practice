// 几种设计模式的实践

// 1、模块模式
const myModule = function() {
  const privateVariable = 'hello'

  function privateMethod() {
    console.log(privateVariable)
  }

  return {
    publicMethod: function() {
      privateMethod()
    }
  }
}

let moduleA = myModule()
moduleA.publicMethod()

// 2、揭示模块模式
const Student = function() {
  let name = 'Peter'
  let age = 12

  function privateStudentInfo() {
    console.log(name + " " + age);
  }

  return {
    publicStudentInfo: privateStudentInfo
  }
}

let stu1 = Student()
stu1.publicStudentInfo()

// 3、ES6 模块
// import {sum} from './utils';
// console.log(sum(1,11));

// 4、单例模式
// 单例模式核心在于垄断了生成对象的权力，只能通过这个函数进行对象生成，
// 而且需要进行判断是否已经生成过对象。

const Teacher = (function() {
  let teacherObject

  function init() {
    return {
      name: "Lili",
      age: 32
    }
  }
  
  return {
    getTeacherObject: function () {
      if (!teacherObject) {
        teacherObject = init()
      }
      return teacherObject
    }
  }
})()

let t1 = Teacher.getTeacherObject()
console.log("t1:" + t1.name);
let t2 = Teacher.getTeacherObject()
console.log("t2:" + t2.name);

// 5、工厂模式
class Animal {
  createAnimal(options) {
    switch (options.animaltype) {
      case 'cat':
        return new Cat(options)
      case 'dog':
        return new Dog(options)
    
      default:
        break;
    }
  }
}

class Cat{
  constructor(options) {
    this.name = options.name || 'mimi'
    this.weight = options.weight || 5
  }
  sayHello () {
    console.log('miao~');
  }
}

class Dog{
  constructor(options) {
    this.name = options.name || 'wangcai'
    this.weight = options.weight || 10
  }
  sayHello () {
    console.log('wangwang~');
  }
}

let factory = new Animal()

let cat1 = factory.createAnimal({
  animaltype: 'cat',
  name: 'orange',
  weight: 15
})

cat1.sayHello()

let dog1 = factory.createAnimal({
  animaltype: 'dog',
  name: 'taidi',
  weight: 5
})

dog1.sayHello()