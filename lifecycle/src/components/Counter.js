import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Emre")

    useEffect(() => {
        console.log("Component Mount Güncellendi!");
    }, [])
    useEffect(() => {
        console.log("number güncellendi!");
    }, [number])
    useEffect(() => {
        console.log("Name Güncellendi!");
    }, [name])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)} onChange={setNumber}>Click</button>
            <br />
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("Özge")} onChange={setName}>Click</button>
        </div>
    );
}

export default Counter
