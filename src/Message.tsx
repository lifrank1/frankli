import React from "react";

// PascalCasing <- used for creating a function component. capitalize every word
function Message() {

    const name = 'Most';
    // JSX : JavaScript XML (compiled to javascript through babel)
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello</h1>
}

// To use this:
// Go to app.tsx and 
export default Message;