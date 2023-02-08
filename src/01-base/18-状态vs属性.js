import React, { Component } from 'react'

class Child extends Component {
    render () {
        return <div>
            child-{this.props.text}
        </div>
    }
}

export default class App extends Component {
    state = {
        text: "111111111111"
    }
    render () {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: "22222"
                    })
                }}>click-父</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}
