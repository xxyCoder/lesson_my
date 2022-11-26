# 对象
## 对象创建
1. 自定义对象
    - 创建一个Object实例，然后为其添加属性和方法
2. 对象字面量
    - var name = {

    }

## 修改自定义属性
1. 数据属性
    - configuration，能否通过delete删除属性从而重新定义，默认为true
    - enumberable，能否通过for-in循环返回属性，默认为true
    - writable，是否能修改，默认为true
    - value，值，默认为Undefined
2. 调用方法Object.defineProperty(对象，属性名，{
    configuration : ,
    enumberable: ,
    writable: ,
    value: 
});
    注意一点，调用该方法时，如果不指定，上面的属性默认变为false
3. 访问器属性
    - configuration
    - enumerable
    - get，读取属性时调用的函数，默认为undefined
    - set，写入属性调用的函数，默认为undefined
    访问属性不能直接调用，必须通过Object.defineProperty()来定义
    _变量名，前面的下划线是一种记号，表示只能通过对象方法访问属性
    注意不一定要同时指定getter和setter，其中一个不指定则默认忽略，不能执行。
4. 定义多个属性 Object.defineProperties()
    - 接收两个对象参数，第一个对象是要添加和修改其属性的对象；第二个是对象的属性与第一个对象中要添加或修改的属性一一对应
5. 读取属性的特性 Object.getOwnPropertyDescriptor() 可以读取属性的描述符
