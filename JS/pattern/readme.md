# 设计模式
## 工厂模式
    function createPerson(name,age,job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function() {
            console.log(this.name);
        }
        return o;
    }
    虽然解决了创建多个相似对象的问题，但是却没有解决对象识别的问题
## 构造函数模式
    function Person(name,age,job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function() {
            console.log(this.name);
        };
    }
1. 没有显式创建对象
2. 直接将属性和方法赋给了this对象
3. 没有return 语句
4. 创建实例需要用new 操作符
5. 每个实例有constructor属性，标识对象
6. 每个实例的同名函数不想等

## 原型模式
    创建的每一个函数都有一个prototype属性，是一个指针，指向一个对象
    无论什么时候创建一个对象，就会为该对象创建一个prototype属性，指向函数的原型对象，所有的原型对象都会自动获得一个constructor属性，指向prototype属性所在函数

## 组合使用构造函数模式和原型模型
    构造函数用于定义实例属性，而原型模式用于定义方法和共享的属性，结构每一个实例都会有自己的一份实例属性的副本，但又同时共享着对方法的应用，最大限度的节省了内存

## 寄生构造函数模式
    基本思想是创建一个函数，该函数的作用是封装创建对象的代码，然后再返回新创建的对象
    这个除了使用了new之外，和工厂模式是一样的，在构造函数的末尾添加return 重写调用构造函数时返回的值
    但是返回的对象与构造函数或与构造函数的原型之间没有关系

## 稳妥构造函数模式
    指的是没有公共属性，而且其方法也不引用this的对象
    与寄生构造函数类似的模式，但是稳妥构造函数模式新创建的对象的实例方法不引用this，且不使用new操作符调用构造函数
    