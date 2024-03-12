import { useState } from "react";

function List() {

    const [list, setList] = useState(['test1', 'test2'])
    const[count,setCount] = useState(1);

    function additem(){
        const itemName = `item ${count}`;
        setList((previousValue)=>[...previousValue,itemName]);
        setCount((previousCount)=>previousCount+1);
    }

    return (
        <>
            <h1>List</h1>
            <button onClick={additem}>Add Item</button>
            <ul>
                {list.map((element, index) => ( <li key={index}>{element}</li>) )}

            </ul>
        </>
    );
}
export default List;