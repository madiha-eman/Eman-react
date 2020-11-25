import React from 'react';


class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            student: [{name: 'asma', age: 24},{name: 'madiha', age: 23}]
        }
    }
    render(){
        
        
        // console.log(this.props.color)
        // let color = this.props.color      
        return (
                  <>
                  <h1>hello world</h1>
                  {this.state.student.filter(item => item.age === 23).map(item => (
                      <>
                        
                        <h2>{item.name}</h2>
                        <h3>{item.age}</h3>
                        </>
                  )
                    )}
            {/* <h2>This is my{this.props.name}{this.state.num}</h2>
        <h3 style={{color: color}}>color  {this.props.color}</h3> */}
        
        

            </>
      )
     }
 }
export default Sidebar;