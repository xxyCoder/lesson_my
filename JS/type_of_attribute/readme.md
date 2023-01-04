# 属性的类型
1. 数据属性，一个保存数据值的位置
    - Configurable，是否可以通过delete删除并重新定义，是否可以修改特性（writable可以修改），是否可以把它改为访问器属性
    - Enumerable，是否可以通过for-in 循环遍历
    - Writable，是否可以被修改
    - Value，属性的值
    修改特性使用Object.defineProperty(修改的对象，对象的属性，描述符)方法，描述符中没有写默认值为false

2. 访问器属性
    - 不包含值，但是包含一个获取函数和一个设置函数
    - Configurable
    - Enumerable
    - Get
    - Set
    使用Object.defineProperty()
3. 属性描述符
    - Object.getOwnPropertyDescriptor()