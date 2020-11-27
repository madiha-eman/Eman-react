import React, {useState} from 'react'

function State() {
    // const [isLit,setLit] = useState(true);
    
    const [btn, setBtn] = useState(10)
    const [btncolor, setBtncolor]= useState('on')
    const [btncolor, setBtncolor]= useState('off')
    const newbtn = () => {

     let  NEBT = setBtn(btn + 1)
    if(NEBT > 15){
        btncolor('on')

    }
    setBtn(newbtn)
    }
    }
    return (
        <div>
       {/* <div className={`${isLit ? 'open' : 'closed'}`}> let's see</div>
       <button onClick={() =>setLit(!isLit)}>click me</button>
       <p>{num}</p>
       <button onClick={() =>setNum(++num)}>click me</button> */}
       <div className={`${btn? 'on':'off'}`}>{btn} C</div>
       <di></di>
        <button onClick={() => setBtn(btn + 1)}>On</button>
        <button onClick={() => setBtn(btn -1)}>Off</button> 
        </div>
      )
}



export default State;








