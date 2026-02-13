import React from 'react';
import Stack from './Stack';
import './Future.css';

const Future = () => {
    const images = [
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
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
