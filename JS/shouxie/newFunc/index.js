/**
 * @function new的过程
 * @param constructor
 */
function myNew() {
    // 创建一个对象
    let obj = {};
    // console.log(typeof arguments,arguments instanceof Array,Object.prototype.toString.call(arguments));
    // arguments是伪数组，故使用数组的方法帮忙将第一个参数即构造函数赋值给constructor，剩下的是构造函数的参数
    const constructor = Array.prototype.shift.call(arguments);
    // 调用构造函数，将this绑定到obj上
    constructor.apply(obj,arguments);
    // 处理prototype
    obj.__proto__ = constructor.prototype;
    return obj;
}

function Person(name,age) {
    this.name = name;
    this.age = age;
}

let p = myNew(Person,'xxx',20);
console.log(p);