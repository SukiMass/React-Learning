import React from "react";
class Car extends React.Component {
    constructor() {
        super();
        const Color = {
            color : "Red",
            brand : "Hyundai"
        }
        this.state = {color:Color.color,brand : Color.brand}
    }
    render() {

        return (
            <>
                <h1>Car color is {this.state.color} and the brand is {this.state.brand}</h1>
                <button onClick={()=>this.setState((previousState) => {return{...previousState,color : "Violet"}})} >Car Color</button>
            </>
        )
    }
}

export default Car;