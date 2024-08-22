import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);

    //FUNCTION TO ADD ITEMS TO THE COUNTER
    const addItems = () => {
        //Este if es para agregar un valor maximo de cosas y dependerá del stock (ya se que no vamos a necesitar stock)
        // if (count < 10){}
        setCount(count + 1);
    }

    //FUNCTION TO SUSTRACT ITEMS FROM THE COUNTER
    const sustractItems = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <>
            <button onClick={addItems}> + </button>
            <p> {count} </p>
            <button onClick={sustractItems}> - </button>
        </>
  )
}

export default Counter