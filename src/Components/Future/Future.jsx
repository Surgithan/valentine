import React from 'react';
import Stack from './Stack';
import './Future.css';

const Future = () => {
    const images = [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format", // Andaman & Nicobar - crystal clear beach
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format", // Venice, Italy - romantic canals
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format", // Vietnam Ha Long Bay
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format", // Paris - Eiffel Tower
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format", // Santorini, Greece
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format"  // Maldives - overwater bungalows
    ];

    return (
        <div className="future-container">
            <h1>Our Future Together 🚀</h1>
            <p className="future-text">
                I can't wait to see what the future holds for us. Traveling the world, building a home, and growing old together.
            </p>

            <div className="stack-wrapper">
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cards={images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`card-${i + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    ))}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={false}
                />
            </div>
        </div>
    );
};

export default Future;
