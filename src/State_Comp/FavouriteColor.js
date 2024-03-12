import { useState } from "react";

function FavouriteColor() {
    const Color = 'yellow'
    let [color,setcolor] = useState(Color);
    // function colorChange(){
    //     setcolor('Blue');
    // }
    return <>
        <h1> My Fav Color is {color}</h1>
        <button onClick={()=>{setcolor('Blue')}} >Change Color</button>
    </>
}

export default FavouriteColor;