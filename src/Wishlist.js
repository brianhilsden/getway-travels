import React, { useState } from 'react';

import Input from 'path/to/Input';

function Wishlist() {
    const [destinations, setDestinations] = useState([]);
    const [destinationInput, setDestinationInput] = useState('');

    const addDestination = () => {
        if (destinationInput.trim() !== "") {
            setDestinations([...destinations, destinationInput.trim()]);
            setDestinationInput('');
        }
    };

    const removeDestination = (index) => {
        const updatedDestinations = [...destinations];
        updatedDestinations.splice(index, 1);
        setDestinations(updatedDestinations);
    };

    return (
        <div>
            <h1>Travel Destination Wishlist</h1>
            <Input
                type="text"
                value={destinationInput}
                onChange={(e) => setDestinationInput(e.target.value)}
                placeholder="Enter destination..."
            />
            <button onClick={addDestination}>Add Destination</button>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>
                        {destination}
                        <button onClick={() => removeDestination(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;
