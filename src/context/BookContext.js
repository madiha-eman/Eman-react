import React, { Component, createContext  } from 'react'
export const BookContext = createContext();

export default class BookContextProvider extends Component {
    state ={
        book1:
    }
    render() {
        console.log(this.props.children)
        return (
            <div>
              <BookContext.Provider value={{...this.state}}>
                  {this.props.children}
                  </BookContext.Provider>  
            </div>
        )
    }
}
import React, {} from 'react'
export const BookContext = createContext();


function BookContext() {
    const [books,useBooks]= useState([
        {name: 'htmlcss', author: 'jon ducket'},
    {name: 'React', author: 'dave ceddia'},
    {name: 'JS', author: 'Mark'},

    ])
    return (
        <div>
            
        </div>
    )
}

export default BookContext

