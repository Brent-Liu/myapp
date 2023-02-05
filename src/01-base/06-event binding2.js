import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

export default class App extends Component {
    a = 100 //假定a是一种状态，我们需要让下面的函数找到状态

    render () {
        return (
            <div>
                <input></input>
                <button onClick={
                    () => {
                        console.log("click1", "如果逻辑过多，不推荐这种写法", this.a)
                    }
                }>add1</button>

                <button onClick={this.handleClick2.bind(this)}>add2 不推荐这种写法</button>

                <button onClick={this.handleClick3}>add3 推荐</button>

                <button onClick={() => this.handleClick4()}>add4 非常推荐，可以传参</button>
            </div >
        )
    }

    handleClick2 () {
        console.log("click2", this.a)
    }

    handleClick3 = () => {
        console.log("click3", "箭头函数，很完美的规避了", this.a)
    }

    handleClick4 = () => {
        console.log("click4", this.a)
    }
}


// 改变this指向三种方法：
// call, 改变this，自动执行函数
// bind，改变this，手动执行函数(加小括号)
// apply, 改变this, 自动执行函数