import React from 'react';
import imageData from '../../assets/images.json';

const Photos = () => {
    const photos = imageData.cards;

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            padding: '60px 20px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative',
            zIndex: 1
        }}>
            <h1 style={{
                color: '#c2255c',
                flexShrink: 0,
                marginBottom: '10px',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                fontFamily: "'Dancing Script', cursive",
                fontSize: '3rem'
            }}>
                Our Moments 📸
            </h1>

            <div style={{
                flex: 1,
                overflowY: 'auto',
                width: '100%',
                maxWidth: '1200px',
                padding: '10px 20px 200px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                // Masonry Layout Properties
                columnCount: 3,
                columnGap: '20px',
            }}>
                <style>
                    {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                        @media (max-width: 900px) {
                            div[style*="columnCount"] {
                                column-count: 2 !important;
                            }
                        }
                        @media (max-width: 600px) {
                            div[style*="columnCount"] {
                                column-count: 1 !important;
                            }
                        }
                    `}
                </style>
                {photos.map((photo, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        marginBottom: '20px',
                        breakInside: 'avoid',
                        backgroundColor: 'white',
                        padding: '10px',
                        paddingBottom: '30px', // More space at bottom for "Polaroid" feel
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                        transform: `rotate(${Math.random() * 4 - 2}deg)`, // Subtle random rotation
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.02) rotate(0deg)';
                            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                            e.currentTarget.style.zIndex = '10';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = `rotate(${Math.random() * 4 - 2}deg)`;
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                            e.currentTarget.style.zIndex = '1';
                        }}
                    >
                        <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '2px'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;
