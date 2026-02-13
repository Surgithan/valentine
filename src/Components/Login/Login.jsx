import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeartsBackground.css";

const Login = () => {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "auto", left: "auto", position: null });

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100, // random horizontal position
        size: Math.random() * 20 + 20, // random size
        duration: Math.random() * 5 + 5, // animation duration
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    const interval = setInterval(createHeart, 500);

    return () => clearInterval(interval);
  }, []);

  const handleNoHover = () => {
    // Check if mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;

    // For mobile, maybe just swap text or move less aggressively
    // Or keep the same but ensure it stays in view

    const randomTop = Math.random() * 60 + 20; // Keep within 20% - 80% vertical
    const randomLeft = Math.random() * 60 + 20; // Keep within 20% - 80% horizontal

    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      position: 'absolute' // Ensure it switches to absolute on interaction
    });
  };

  return (
    <div className="login-container">
      <div className="hearts-container">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="content-overlay">
        <h1 className="love-quote">"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."</h1>
        <h2 className="proposal-text">Are you happy with me?</h2>

        <div className="buttons-container">
          <button className="yes-btn" onClick={() => navigate('/memories')}>Yes! ❤️</button>
          <button
            className="no-btn"
            style={{
              top: noButtonPosition.position === 'absolute' ? noButtonPosition.top : 'auto',
              left: noButtonPosition.position === 'absolute' ? noButtonPosition.left : 'auto',
              position: noButtonPosition.position || 'relative'
            }}
            onMouseEnter={handleNoHover}
            onClick={handleNoHover} // Also move on click for touch devices
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
