import Axios from 'axios';
import React, { useState, useEffect} from 'react';
function  Api1 (){
    const [recipes, setRecipes]= useState([])
    useEffect(() => {
       Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res =>{  
       console.log(res.data.meals[0])
       setRecipes(res.data.meals[0])
      
       })
        
    },[])
    const myRec = recipes ? 
    (<div>
    <h1>{recipes.strCategory}</h1>
    <h4>{recipes.strIngredient1}</h4>
    <img src={recipes.strMealThumb} width='200px' />
    </div>) : (<p>Loading</p>)
   
console.log(recipes)
   
    return(
<div>
   {myRec}
</div>
    )
}

export default Api1;