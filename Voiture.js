import React, { useState } from "react";
import "./components/feed/feed.css";

class Voiture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false,
        };
    }

    toggleDescription = () => {
        this.setState((prevState) => ({
            showDescription: !prevState.showDescription,
        }));
    };

    render() {
        const { title, photo, price } = this.props;
        const { showDescription } = this.state;

        // Construct the image URL based on the filename
        const imageUrl = `${process.env.PUBLIC_URL}/img/${photo}`;

        return (
            <div className="cardContainer">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="da" />
                    <div className="card-body">
                        <div className="card-text-overlay">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-price">Price: {price} DT </p>
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={this.toggleDescription}
                        >
                            {showDescription ? "Hide Details" : "Show Details"}
                        </button>
                        {showDescription && (
                            <div className="description">
                                {/* Add your product description here */}
                                This is the description of the product.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Voiture;
