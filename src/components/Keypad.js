// Code Keypad Component Here

function Keypad (){
    function eventHandler() {
        console.log("Entering password...");
    }
    return (
        <div><input onChange={() => eventHandler()} type="password" /></div>
    )
}

export default Keypad;