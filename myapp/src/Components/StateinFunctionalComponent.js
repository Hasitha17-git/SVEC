import React,{useState} from 'react'

export default function StateinFunctionalComponent() {
    let [name,updateName]=useState("Hasitha");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Hasitha N")}}
            onMouseLeave={()=>{updateName("Hasitha")}}>
                {name}
            </h1>
        </div>
    )
}
