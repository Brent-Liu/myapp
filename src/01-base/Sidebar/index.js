import React from 'react'

export default function App (props) {
    //类接收props: this.props
    let { bg } = props

    console.log(props)
    return (
        <div style={{ background: bg, width: "200px" }}>
            <ul>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
                <li>1111111</li>
            </ul>
        </div>
    )
}
