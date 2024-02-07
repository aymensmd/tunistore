import React, { useState, useEffect } from "react";
import Voiture from "./Voiture";
import { db, collection, getDocs } from "./firebase";

const Menu = ({ searchTerm }) => {
    const [voitures, setVoitures] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchVoitures = async () => {
        try {
            const snapshot = await getDocs(collection(db, "voitures"));
            const voituresData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setVoitures(voituresData);
        } catch (error) {
            console.error("Error fetching voitures:", error);
        } finally {
            setLoading(false); // Set loading to false when fetching is complete
        }
    };

    useEffect(() => {
        fetchVoitures();
    }, []); // Fetch voitures on component mount

    const filterVoitures = () => {
        if (!searchTerm) {
            // If the search term is empty, show all voitures
            fetchVoitures();
        } else {
            // Filter cars based on the search term
            const filteredVoitures = voitures.filter((prod) =>
                prod.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setVoitures(filteredVoitures);
        }
    };

    useEffect(() => {
        filterVoitures();
    }, [searchTerm]); // Update voitures when search term changes

                    return (
                        <div className="cardContainer">
                         {loading ? (
                        <div className="loader-container">
    <div className="loader"></div>
                        </div>
                ) : (
                  voitures.map((prod) => (
                    <Voiture key={prod.id} title={prod.title} photo={prod.photo} price={prod.price} />
                  ))
                )}

        </div>  
    );
};

export default Menu;
