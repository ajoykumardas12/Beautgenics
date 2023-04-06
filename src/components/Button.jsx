import React from "react";

export default function Button(props){
    return (
        <div className={`flex flex-row items-center justify-center gap-2 rounded-sm  text-sm cursor-pointer ${props.cls}`}>
            {props.children}
        </div>
    )
}