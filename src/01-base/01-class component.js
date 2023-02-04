// class Test {
//     constructor() {
//         this.a = 1
//     }

//     testa () {
//         console.log("testa")
//     }
// }

// class ChildTest extends Test {
//     testb () {
//         console.log("testb")
//     }
// }

// var obj = new Test()
// obj.testa()
// console.log(obj.a)


// var objChild = new ChildTest()
// objChild.testa()
// console.log(obj.a)

import React from 'react'
class App extends React.Component {
    render () {
        return <div>
            hello react Component
            <ul>
                <li>1111</li>
                <li>2222</li>
            </ul>
        </div>
    }
}

export default App