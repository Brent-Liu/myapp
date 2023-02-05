import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'


export default class App extends Component {

    state = {
        list: [
            {
                id: 1,
                text: "Movie"
            },
            {
                id: 2,
                text: "Cimara"
            },
            {
                id: 3,
                text: "Account"
            }
        ],
        current: 0
    }


    render () {
        return (
            <div>

                {
                    this.state.current === 0 && <Film></Film>
                }

                {
                    this.state.current === 1 && <Cinema></Cinema>
                }

                {
                    this.state.current === 2 && <Center></Center>
                }

                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={
                                this.state.current === index ? 'active' : ''
                            } onClick={() => this.handleClick(index)}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick (index) {

        this.setState({
            current: index
        })
    }
}
