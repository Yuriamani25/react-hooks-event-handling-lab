// Code EyesOnMe Component Here

function EyesOnMe (){
    function onfocus() {
        console.log("Good!");
    }
    function onblur() {
        console.log("Hey! Eyes on me!");
    }
    return (
        <div><button onFocus={() => onfocus()} onBlur={() => onblur()}>Eyes on me</button></div>
    )
}

export default EyesOnMe;