import React from "react";

export default function ReasonHome(props) {
    return (
        <div className="sep-reason">
            <h3>{props.h3}</h3>
            <img src={require (`../imgs/${props.image}`)} />
        </div>
    )
}
