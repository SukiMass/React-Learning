import Car from "./Car"
import Apple from "./Apple"
function Garage() {
    // const color = 'red'
    // const brand = 'hyundai'
    // const carInfo = {}
    const carInfo = {
        color: 'red',
        brand: 'hyundai'
    }
    const carsList = [
        { color: 'red', brand: 'hyundai' },
        { color: 'blue', brand: 'maruti' },
        { color: 'green', brand: 'BMW' },
        { color: 'orange', brand: 'Wolkswagon' },
        { color: 'purple', brand: 'Audi' },
    ]
    // const appleInfo={}
    const appleInfo = {
        type: 'kashmir',
        color: 'red'
    }
    const checKAppleInfo = appleInfo.color !== undefined && appleInfo.type !== undefined;
    return (
        <>
            <h1>This is Garage inside component</h1>
            {/* <Car color = {color} brand = {brand}/> */}
            {/* ** Conditional rendering below** */}
            {/* { carInfo.color !== undefined && carInfo.brand !== undefined ?
            <Car carInfo = {carInfo}/> : null } */}
            {/* **Listing below** */}
            <ul>
                {carsList.map((value,index)=>{return <li key={index}> <Car carInfo = {value} /> </li> })}
            </ul>
            <Car carInfo={carInfo} />
            {/* <Apple appleInfo ={appleInfo}/> */}
            {checKAppleInfo ? <Apple appleInfo={appleInfo} /> : <h2>There is no Apple Input</h2>}
        </>
    );
}

export default Garage;