# 面对对象
- JS面对对象的实现方式
    1. 对象字面量
        {
            name:"xxy"
        }
    2. 模板，可批量生产
        class + constructor + new 
    3. 函数生成
- 类构建过程
    1. 定义coffee类模板
    2. 在构造函数中传入一个type属性，this是实例化后的对象
    3. 添加一些方法，都是public 公有方法
- 面对对象语法总结
    1. class 类的抽象
    2. extends 继承
        这样子类拥有了父类模板
    3. super() 代表调用父类