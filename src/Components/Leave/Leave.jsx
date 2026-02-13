import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leave = () => {
    const navigate = useNavigate();
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        // Blink animation
        const blinkInterval = setInterval(() => {
            setBlink(prev => !prev);
        }, 500);

        // Redirect after 3 seconds
        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => {
            clearInterval(blinkInterval);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Sad emoji background */}
            <div style={{
                position: 'absolute',
                fontSize: '15rem',
                opacity: 0.1,
                animation: 'float 3s ease-in-out infinite'
            }}>
                😢
            </div>

            {/* Main message */}
            <h1 style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '4rem',
                color: 'white',
                textAlign: 'center',
                marginBottom: '20px',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                opacity: blink ? 1 : 0.3,
                transition: 'opacity 0.5s ease',
                zIndex: 1
            }}>
                Don't Leave! 💔
            </h1>

            <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '2rem',
                color: '#fff',
                textAlign: 'center',
                marginBottom: '40px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                zIndex: 1
            }}>
                Come Back Again! 🥺
            </h2>

            {/* Sad hearts */}
            <div style={{
                display: 'flex',
                gap: '20px',
                fontSize: '3rem',
                zIndex: 1
            }}>
                <span style={{ animation: 'bounce 1s ease-in-out infinite' }}>💔</span>
                <span style={{ animation: 'bounce 1s ease-in-out infinite 0.2s' }}>😭</span>
                <span style={{ animation: 'bounce 1s ease-in-out infinite 0.4s' }}>💔</span>
            </div>

            {/* Redirecting message */}
            <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '40px',
                zIndex: 1
            }}>
                Taking you back home...
            </p>

            <style>
                {`
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-30px); }
                    }
                `}
            </style>
        </div>
    );
};

export default Leave;