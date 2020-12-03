// import React, { useState, useContext } from 'react'
// import {ThemeContext1} from '../context/ThemeContext1'
// function BookList1() {
//     const {isLight, light, dark} = useContext(ThemeContext1)
//     const ui = isLight ? light : dark;
//     // console.log(theme)
//     const[books, setBooks] = useState([
//         {name: 'html', author: 'jhon'},
//         {name: 'JS', author: ''},
//         {name: 'react', author: ''},
//     ])
//     return (
//         <div style={{background: ui.bg, color:ui.text}}>
//             <ul>
//                 {books.map((item)=>(
//                <li key={item.name}>{`${item.name} is written by ${item.author}`}</li>
//             ))}
//             </ul>
//             {/* <button onClick={get_data}>Theme </button> */}
//         </div>
//     )
// }

// export default BookList1;
