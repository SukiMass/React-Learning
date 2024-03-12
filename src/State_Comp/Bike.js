import { useState } from "react";

function Bike(){
//    const[color,setColor] = useState("Red")
//    const[brand,setBrand] = useState("honda")
//    const[model,setModel] = useState("Fz V-2")
//    const[year,setYear] = useState("2024")

  const [bike,setBike] = useState(
    {
        color : "Red",
        brand : "Yamaha",
        model : "FZ v-2",
        year : "2024"
    })
    function updateColor(){
        setBike((previousState)=>{
            return {...previousState,color : "Blue"}
        })
    }
    console.log('Current state', bike);
    return(
        <>
        <h1>My Bike</h1>
        <p>Color : {bike.color}</p>
        <p>Brand : {bike.brand}</p>
        <p>Model : {bike.model}</p>
        <p>Year : {bike.year}</p>
        <button onClick={updateColor}>Change color</button>
        </>
    )
}

export default Bike;