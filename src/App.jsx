import React, { useState } from 'react';
import L from "./Login"

function F(props) {
    const [name, changeName] = useState();
    const [n, ch] = useState();
    const x = () => {
        ch(name);
    }
    const y = (event) => {
        changeName(event.target.value);

    }
    const f = () => {
        alert("Done!!");
    }
    return (
        <>
            <L />
        </>
    );
}

export default F;