import React, {useState} from "react";
import "./Button.css";

function Button({children}) {
    let [color, setColor] = useState("Red");
    
    function handeClick(){
        alert("Hola humano");
        setColor ("yellow ");
        
    }
    return(
        <button style= {{backgroundColor: color}} onClick={handeClick} className="btn">
            {children}
        </button>
    );
}

export default Button