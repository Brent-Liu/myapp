import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    a = 100
    myref = React.createRef()

    state = {
        list: ["aaa", "bb", "c"]
    }

    render () {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={() => {
                    this.handleClick1()
                }}>add2</button>
                <ul>
                    {
                        this.state.list.map(item => <li key={item}>
                            {item}

                            {/*富文本展示*/}
                            <span dangerouslySetInnerHTML={
                                { __html: item }
                            }></span>
                            <button onClick={this.handleClick2.bind(this, item)}>delete</button>
                        </li>)
                    }

                </ul>

                {this.state.list.length === 0 ? <div>no current event</div> : null}

                {this.state.list.length === 0 && <div>no current event </div>}

                <div className={this.state.list.length === 0 ? '' : 'hidden'}>no current event</div>
            </div >
        )
    }

    handleClick1 = () => {
        console.log("click2", this.myref.current.value)

        let newlist = this.state.list
        newlist.push(this.myref.current.value)

        this.setState({
            list: this.state.list
        })

        this.myref.current.value = ""
    }

    handleClick2 = (index) => {
        console.log("brent", index)

        let newlist = this.state.list.slice()

        newlist.splice(index, 1)

        this.setState({
            list: newlist
        })
    }
}