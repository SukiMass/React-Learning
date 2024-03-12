import { useEffect, useState } from "react"

function Render(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('Screen Rendered');
        // setCount(1);
        // checkCount()
        // setTimeout(()=>{
        //     setCount(count+1)
        // },1000)
    })

    function rendering(){
        setCount(count+1)
    }

   function checkCount(){
        if(count>10){
           setCount(1)
        }
    }

    return(
        <>
        <h1>Screen is Rendered {count} times</h1>
        <button onClick={rendering}>Render</button>
        </>
    )
}
export default Render;