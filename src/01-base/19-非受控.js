import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
    render () {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" ref={this.myusername} defaultValue="kerwin" />

                <button onClick={() => {
                    console.log(this.myusername.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.myusername.current.value = ""
                }}>重置</button>


                {/*不用状态传给儿子是不可能的 */}
                <Child myvalue={this.myusername.current.value} /> {/*错误的写法*/}
            </div >

        )
    }
}
