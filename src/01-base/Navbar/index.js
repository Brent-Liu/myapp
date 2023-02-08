import React, { Component } from 'react'

export default class Navbar extends Component {
    //state只能内部自己用，外面无法改变

    //属性是父组件传来的，用this.props
    render () {
        console.log(this.props)
        let { title, leftshow } = this.props
        return (
            <div>
                {leftshow && <button>返回</button>}
                navbar-{title}-{this.props.title}
                <button>home</button>
            </div>
        )
    }
}
