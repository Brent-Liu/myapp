import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()
    render () {
        return (
            <div>
                <input ref="mytext" />
                <button onClick={
                    () => {
                        console.log("click1", this.refs.mytext.value)
                    }
                }>add1</button>

                <input ref={this.myref}></input>
                <button onClick={() => {
                    console.log("click2", this.myref.current.value)
                }}>add2</button>
            </div >
        )
    }
}


// 改变this指向三种方法：
// call, 改变this，自动执行函数
// bind，改变this，手动执行函数(加小括号)
// apply, 改变this, 自动执行函数 