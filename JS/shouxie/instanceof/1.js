/**
 * @function 判断left是否是right实例
 * @param {*} left 对象
 * @param {*} right 对象
 * @returns boolean
 */
function myInstanceof(left,right) {
    let tmp = left;
    while(tmp !== null) {
        if(tmp.__proto__ === right.prototype) {
            return true;
        }
        tmp = tmp.__proto__;
    }
    return false;
}

function Person(name) {
    this.name = name;
}
let p = new Person('xxx');
// console.log(p instanceof Person);
console.log(myInstanceof(p,Person));