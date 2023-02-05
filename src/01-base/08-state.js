import React, { Component } from 'react'

export default class App extends Component {
    a = 1

    constructor() {
        super()
        this.state = {
            mytext: "Collect",
            myshow: true
        }
    }
    render () {
        return (
            <div>
                <h1>Welcome to the book list</h1>

                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow
                    })

                    if (this.state.myShow) {
                        console.log("logic of collect")
                    } else {
                        console.log("logic of Uncollect")
                    }
                }}>{this.state.myShow ? "Collect" : "Uncollect"}</button>
            </div>
        )
    }
}