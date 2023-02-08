import React, { Component } from 'react'
import Navbar from './Navbar'
import kerwinPropTypes from 'prop-types'


export default class App extends Component {

    // 类属性
    static propTypes = {
        title: kerwinPropTypes.string,
        leftshow: kerwinPropTypes.bool
    }

    static defaultProps = {
        leftshow: true
    }

    render () {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftshow="false" />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" />
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" />
                </div>
            </div>
        )
    }
}

// Navbar.propTypes = {
//     title: kerwinPropTypes.string,
//     leftshow: kerwinPropTypes.bool
// }

// Navbar.defaultProps = {
//     leftshow: true
// }

//类属性 -- 属性验证（类似TS)
// 注意类属性和对象属性的区分
// 对象属性：没有static，需要实例化之后才能访问属性
// 类属性：用类即可访问的属性，可以在外边定义，如果在里面定义需要static
Navbar.propTypes = {
    title: kerwinPropTypes.string,
    leftshow: kerwinPropTypes.bool
}