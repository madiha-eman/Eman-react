import Axios from 'axios';
import React, {useState, useEffect} from 'react';
function ApiUser (){
    const [id, setId] = useState([])
    useEffect(() => {
   Axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
      console.log(res.data)
      const arr = res.data.slice(0,10)
      setId(arr)
   })
},[])
const post = id ?
(<div>
    <ul>
       {id.map(item=>(
    <>
       <li>
       <h1>{item.id}</h1>   
        <h2>{item.title}</h2>
       <p>{item.body}</p>
       </li>
    </>
       )
        )}
        </ul>
    </div> ): (<p>loding</p>)
console.log(id)
    return(
<div>
<ul>
   {id.map(item=>(
<>
   <li><h2>{item.title}</h2>
   <p>{item.body}</p>
   </li>
</>
   )
    )}
    </ul>
</div>        
    )
}
export default ApiUser;