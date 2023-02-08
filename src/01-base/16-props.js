import React, { Component } from 'react'
import Navbar from './Navbar'
import kerwinPropTypes from 'prop-types'


export default class App extends Component {

    // 类属性
    propTypes = {
        title: kerwinPropTypes.string,
        leftshow: kerwinPropTypes.bool
    }

    render () {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftshow={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" leftshow={true} />
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" leftshow={true} />
                </div>
            </div>
        )
    }
}

//类属性 -- 属性验证（类似TS)
// 注意类属性和对象属性的区分
// 对象属性：没有static，需要实例化之后才能访问属性
// 类属性：用类即可访问的属性
Navbar.propTypes = {
    title: kerwinPropTypes.string,
    leftshow: kerwinPropTypes.bool
}