import React, { Component } from 'react'
import './css/01-index.css'   //导入css模块， webpack的支持

export default class App extends Component {
    render () {
        var myname = "kerwin"
        var obj = {
            backgroundColor: "yellow",
            fontSize: "30px"
            //用大对象的方式定义语法
        }
        return (
            <div>
                {10 + 20}-{myname}
                {10 > 20 ? "aaa" : "bbb"}

                <div style={obj}>11111111</div>
                <div style={{ background: "red" }}>22222222</div>
                <div className="active">3333333333</div>
                <div id="myapp">44444444444</div>

                <label>User name1:</label>
                <input type="text" />

                <label htmlFor="username">User name2:</label>
                <input type="text" id="username" />
            </div >
        )
    }
}
