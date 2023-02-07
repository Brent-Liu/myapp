# P5 Introduce the concept of JSX

JS + XML
Babel
React.createElement("div", {id : "aaa"}, "11111")

# P6 Component

structure(HTML), behavior(JS), pattern(CSS)

1. review class and class extends in JS

2. How to create class Component in React

组件名字要大写

# P9 Pattern of Component

可以外部导入 CSS 样式，也可以在内部以 obj 的形式写
大括号里面的东西是 JS 的天地，但只能放表达式，不能放函数

# P11 Event tackle

改变 this 指向三种方法
React 并不会真正的绑定事件到每一个具体 <> 的元素上，而是采用事件代理的模式

# P13 ref 的应用

用 React.createRef()拿到节点 input 中的值

# P14 状态初体验

用状态原因：declarative + 不直接操作 DOM

# P16 Key 值解析

Key 值原因：为了列表的复用和重排

# P18 todolist case - delete

splice 函数

# P19 conditional render

添加了三个功能：输入框自动清空，list 为空时候显示为空

# P24 状态再体验

setState 处在同步逻辑中，调用后不会立即更新状态（异步更新我们的真实状态)
如果 setState 处在异步环境中，同步更新状态，同步更新真实 dom
