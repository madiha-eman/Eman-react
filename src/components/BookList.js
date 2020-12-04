import React,{ useState, useContext} from 'react'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

function BookList() {
    const {isLight, light, dark} = useContext(ThemeContext)
    const ui = isLight? light : dark;
    const {book1} = useContext(BookContext);

    // console.log(book1)
    return (
    
        <div style={{background: ui.bg, color:ui.text}}>
            {/* <button onClick={}></button> */}
           <ul>
               {book1.map((item)=>(
                   <li key={item.name}>{`${item.name} written by ${item.author} `}</li>
               ))}
           </ul>
           {/* <button onClick={this.handle}>Theme</button> */}
        </div>
    )
}


export default BookList;
