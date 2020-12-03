import React, { Component } from 'react'


class Main1 extends Component {
    constructor(props){
      super(props)
      this.state={
          Name:{name: 'asma'}
      }
      console.log(this.state.name)

    }
    render() {
        return (
            <div>
                {/* <h2 name={this.state.name}></h2> */}
            </div>
        )
    }
}
export default Main1;