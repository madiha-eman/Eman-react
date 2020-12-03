import React, { Component, createContext } from 'react'
export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    constructor(props){
        super(props)
    this.state ={
        isLight: true,
        isLight1: false,
        light:{text: 'black', bg: 'white'},
        dark:{text: 'white', bg: 'black'}
    }}
    handle =()=>{
        this.setState({
            isLight: !this.state.isLight,
            isLight1: !this.state.isLight1,
        })
    }
    render() {
        console.log(this.props.children)
        return (
            <div>
               <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
                   </ThemeContext.Provider> 
            </div>
        )
    }
}
