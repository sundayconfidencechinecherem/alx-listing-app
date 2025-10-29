import React from "react";
import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({text, onClick}) =>{
    return(
        <button 
        onClick={onClick}
        className="bg-blue-500"
        >
            {text}
            </button>
    )


}

export default Button;