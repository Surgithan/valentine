import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeartsBackground.css";

const Login = () => {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "60%", left: "60%" });

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
    const randomTop = Math.random() * 80 + 10; // Keep within 10% - 90% vertical
    const randomLeft = Math.random() * 80 + 10; // Keep within 10% - 90% horizontal
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
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
        <h2 className="proposal-text">Will you be my Valentine?</h2>

        <div className="buttons-container">
          <button className="yes-btn" onClick={() => navigate('/memories')}>Yes! ❤️</button>
          <button
            className="no-btn"
            style={{ top: noButtonPosition.top, left: noButtonPosition.left, position: 'absolute' }}
            onMouseEnter={handleNoHover}
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
