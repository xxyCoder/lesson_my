# map
- 大多数特性可以通过object实现
- 与object只能使用数值、字符串或符号作为键不同，Map可以使用任何JS数据类型作为键
- Map可以迭代
## 迭代
1. 可以通过entries()方法或Symbol.iterator属性获取迭代器
## object与Map选择
1. 内存
    - 不同浏览器的情况不同，但是给定固定大小的内存，Map大约可以比Object多存储50%的键值对
2. 插入性能
    - Map性能更佳
3. 查找速度
    - 大量查找下，Object更佳
4. 删除性能
    - 大量删除选择Map

# WeakMap
- 弱映射，键只能是Object或继承Object的类型