import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';

const Surprise = () => {
    const [showSecondVideo, setShowSecondVideo] = useState(false);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    const handleFirstVideoEnd = () => {
        // When first video ends, show second video and trigger confetti
        setShowSecondVideo(true);
        triggerConfetti();

        // Auto-play second video
        setTimeout(() => {
            if (video2Ref.current) {
                video2Ref.current.play();
            }
        }, 100);
    };

    const triggerConfetti = () => {
        const duration = 5000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff0000', '#ff69b4', '#ff1493', '#ffd700']
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff0000', '#ff69b4', '#ff1493', '#ffd700']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            overflowY: 'auto',
            paddingTop: '80px',
            paddingBottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '25px',
                maxWidth: '600px',
                width: '90%',
                boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                border: '2px solid #fff0f3',
                transition: 'all 0.5s ease',
                marginBottom: '40px'
            }}>
                {/* Title */}
                <h1 style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2rem',
                    color: '#d6336c',
                    margin: 0,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>
                    {!showSecondVideo ? '💍 A Special Moment 💍' : '🌹 Forever Love 🌹'}
                </h1>

                {/* Video Container */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                    border: '3px solid white'
                }}>
                    {/* First Video - Proposal Animation */}
                    {!showSecondVideo && (
                        <video
                            ref={video1Ref}
                            src="/Animated_Proposal_GIF_Created.mp4"
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleFirstVideoEnd}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                animation: 'fadeIn 1s ease-out'
                            }}
                        />
                    )}

                    {/* Second Video - Bioluminescent Rose */}
                    {showSecondVideo && (
                        <video
                            ref={video2Ref}
                            src="/Bioluminescent_Rose_Scene_Generation.mp4"
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                animation: 'zoomIn 0.8s ease-out'
                            }}
                        />
                    )}
                </div>

                {/* Message */}
                <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1rem',
                    color: '#862e9c',
                    margin: 0,
                    fontWeight: '500'
                }}>
                    {!showSecondVideo
                        ? 'Watch this special moment unfold...'
                        : 'A love that glows forever ✨'}
                </p>

                {/* Replay Button (appears after second video) */}
                {showSecondVideo && (
                    <button
                        onClick={() => {
                            setShowSecondVideo(false);
                            setTimeout(() => {
                                if (video1Ref.current) {
                                    video1Ref.current.play();
                                }
                            }, 100);
                        }}
                        style={{
                            background: 'linear-gradient(45deg, #ff6b6b, #ff8787)',
                            border: 'none',
                            padding: '10px 30px',
                            fontSize: '1rem',
                            color: 'white',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontFamily: "'Poppins', sans-serif",
                            boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            marginTop: '5px'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 107, 107, 0.5)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.3)';
                        }}
                    >
                        ↻ Watch Again
                    </button>
                )}

                <style>
                    {`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes zoomIn {
                            from { opacity: 0; transform: scale(0.9); }
                            to { opacity: 1; transform: scale(1); }
                        }
                    `}
                </style>
            </div>
        </div>
    );
};

export default Surprise;
