import React from "react";

const Users=(props)=>{
    return(
        <div>
            <ul>
                <li>{props.name} is {props.age} years old</li>

            </ul>
        </div>
    )
        
    
}
export default Users