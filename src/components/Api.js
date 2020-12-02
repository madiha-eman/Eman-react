import Axios from 'axios';
import React, {useState, useEffect} from 'react';
function Api(){
    const [recipes, setRecipes] = useState([])
    /// useeffect(callback function, variable)
    useEffect(()=>{
        console.log('hi')
       Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res => {
           console.log(res.data.meals[0])
           setRecipes(res.data.meals[0]);
        })
    }, [])
    console.log(recipes)
    return(
        <div>
            <h1>{recipes.strCategory}</h1>
            <h1>hello</h1>
        </div>
    )
} 

export default Api;