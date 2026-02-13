import React, { useMemo } from 'react';
import DomeGallery from '../DomeGallery/DomeGallery';
import './Background.css';

const emojiToSvg = (emoji) => {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <text y="50%" x="50%" dominant-baseline="central" text-anchor="middle" font-size="70">
            ${emoji}
        </text>
    </svg>
    `.trim();
    return `data:image/svg+xml;base64,${btoa(encodeURIComponent(svg).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }))}`;
};

const loveEmojis = ['❤️', '💖', '💘', '💝', '💕', '💌', '😍', '🥰', '🌹', '💍', '💏', '💑', '💋', '💗', '💓', '💞'];

const Background = () => {
    const images = useMemo(() => {
        return loveEmojis.map(emoji => ({
            src: emojiToSvg(emoji),
            alt: `Love emoji ${emoji}`
        }));
    }, []);

    return (
        <div className="background-container">
            <DomeGallery
                images={images}
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={0}
                segments={34}
                dragDampening={2}
                grayscale={false} // Emojis should be colorful!
                overlayBlurColor="#fee5efff"
            />
        </div>
    );
};

export default Background;
