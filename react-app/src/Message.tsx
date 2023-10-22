

function Message() { 
    const name = 'Ben Wildgoose';
    if (name) {
    return <h1>{name}</h1>;
    }
    return <h1>Anonymous</h1>;
}

export default Message;