'use client'
import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);


    console.log("client side counter component", count);
    return (
        <div>
            <h3 className="text-xl font-bold">Counter: { count}</h3>
            <button
            onClick={() => setCount(count+1)} 
                className='border-2 p-2 rounded-2xl bg-gray-300 text-black'>counter increment</button>
        </div>
    );
};

export default Counter;