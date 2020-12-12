import React, { useState } from 'react';

function F(props) {
    const [name, changeName] = useState();
    const [n, ch] = useState();
    const x = () => {
        ch(name);
    }
    const y = (event) => {
        changeName(event.target.value);

    }
    return (
        <>
            <h1>Hello {n}  😉</h1>
            Name : <input type="text" placeholder="Enter name" value={name} onChange={y} /><br></br><hr></hr>
            <button onClick={x}>Click 😊</button>
        </>
    );
}

export default F;