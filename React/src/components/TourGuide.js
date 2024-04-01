import React from "react";

export default function TourGuide(props) {
    return (
        <div className='info-button'>
            <div className="info-button-left">
                <img src={require(`../imgs/${props.img}`)} />
                <span className="tour-info">
                    <h3>{props.name}</h3>
                    <h4>{props.brief}</h4>
                    <p>{props.city}</p>
                    <span className="tour-icons">
                        <i class="fa-brands fa-linkedin fa-lg"></i>
                        <i class="fa-brands fa-google-plus-g fa-lg"></i>
                    </span>
                </span>
            </div>
            <span className="button">
                <h5>Book Me</h5>
            </span>
        </div>
    )
}