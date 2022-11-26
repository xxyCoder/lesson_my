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