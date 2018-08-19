# react-comment
develop comment component using react-redux

## 编程思路
1. 先分析需要怎么排版文件目录，
2. 再分析reducer、action
3. 搭建静态页面
4. 填入代码

分析哪些页面需要使用高阶组件connect，它是一个函数，接收mapStateToProps和mapDispatchToProps参数，再接收组件名。高阶组件通过props形式传给组件，组件可以直接props获取到。
高阶组件返回一个新的组件。
在组件中直接使用connect不会有问题。

mapStateToProps是返回属性对象
mapDispatchToProps是返回函数，此函数里会dispatch
dispatch参数为对象，肯定包含type键值对

input包括提交动作
comment list包含初始化和删除

## 出现的问题
React.PropTypes is deprecated since React 15.5.0, use the npm module prop-types instead  react/no-deprecated


不能引入scss，这是怎么更改配置文件