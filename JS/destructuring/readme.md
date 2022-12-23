# es6解构
- 从数组和对象中提取值，对变量进行赋值，称为解构
- 如果解构不成功，值为undefined，即声明变量但是没有赋值
- 不完全解构，即等号左边的值只匹配一部分等号右边的值
1. 数组解构
- 只要等号右边的数据具有iterator接口的，都可以采用数组形式解构
-  解构赋值允许有默认值
- es6内部使用严格相等运算符判断一个位置是否有效，所以，当数组内成员严格等于undefined，默认值才生效
2. 对象的解构
- 数组的元素是按次序排列的，变量的取值由它的位置决定，而对象的没有次序，变量必须和属性同名，才能拿到值
- 如果变量名和属性名不一致，必须写出 属性名:变量名
    解构内部是先找到同名的属性，然后再赋值给相应的变量，被赋值的是后者而不是前者
- 允许有默认值，与数组类似
- 数组本质是特殊的对象，因此可以对数组进行对象属性解构
3. 字符串解构
- 字符串被转换成一个类似数组的对象
- 类似数组的对象都有一个length属性，还可以对其进行解构
4. 函数参数解构