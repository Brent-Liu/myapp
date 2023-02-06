import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super()

        this.state = {
            cinemaList: []
        }

        // axios.get("地址").then(res => { }).catch(err => { console.log(err) })

        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8720566").then(
        //     res => {
        //         console.log(res)
        //     }).catch(err => {
        //         console.log(err)
        //     })

        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8720566",
            method: 'get',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16756385485628146619514881", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data.data.cinemas)

            this.setState({
                cinemaList: res.data.data.cinemas
            })
        })

    }
    render () {
        return (
            <div>
                <input onInput={this.handleInput} />
                {
                    this.state.cinemaList.map(item =>
                        <dl key={item.id}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div >
        )
    }

    handleInput = (event) => {
        console.log("input", event.target.value)

        var newList = this.state.cinemaList.filter(item => item.name.includes(event.target.value))

        this.setState({
            cinemaList: newList
        })
    }
}
