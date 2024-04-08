"use client";
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(1);
    const IncrementByValue = () => {
        setCount(count + 1);
    };

    const DecrementByValue = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div className="flex flex-col justify-center ">
                <button onClick={IncrementByValue}>Increment</button>
                <button>{count}</button>
                <button onClick={DecrementByValue}>Decrement</button>
            </div>
        </>
    );
}
