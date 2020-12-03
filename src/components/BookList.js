import React,{ useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

function BookList() {
    const {isLight, light, dark} = useContext(ThemeContext)
    const ui = isLight? light : dark;
    const [books, setBooks] = useState([
        {name: 'htmlcss', author: 'jon ducket'},
        {name: 'React', author: 'dave ceddia'},
        {name: 'JS', author: 'Mark'},
    ])
    return (
    
        <div style={{background: ui.bg, color:ui.text}}>
           <ul>
               {books.map((item)=>(
                   <li key={item.name}>{`${item.name} written by ${item.author} `}</li>
               ))}
           </ul>
           <button onClick={this.handle}>Theme</button>
        </div>
    )
}


export default BookList;
