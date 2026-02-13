import React, { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import './Memories.css';
import imageData from '../../assets/images.json';

export default function Memories({ items = imageData.memories,
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    // Map the string/URL items to objects if they aren't already
    const data = useMemo(() => {
        return items.map((item, index) => {
            if (typeof item === 'string') {
                return {
                    image: item,
                    title: `Memory #${index + 1}`,
                    subtitle: 'Beautiful Moment',
                    borderColor: index % 2 === 0 ? '#d6336c' : '#c2255c', // Pink/Red themes
                    gradient: `linear-gradient(${135 + (index * 10)}deg, #faa2c1, #e64980)`,
                    handle: '❤️'
                };
            }
            return item;
        });
    }, [items]);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        if (!rootRef.current) return;
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = url => {
        // Optional: Open image in new tab or modal
        // if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleCardMove = e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div className="memories-container">
            <div className="memories-content">
                <div
                    ref={rootRef}
                    className="chroma-grid"
                    style={{
                        '--r': `${radius}px`,
                        '--cols': columns,
                        '--rows': rows
                    }}
                    onPointerMove={handleMove}
                    onPointerLeave={handleLeave}
                >
                    {data.map((c, i) => (
                        <article
                            key={i}
                            className="chroma-card"
                            onMouseMove={handleCardMove}
                            onClick={() => handleCardClick(c.image)}
                            style={{
                                '--card-border': c.borderColor || 'transparent',
                                // '--card-gradient': c.gradient, // Removed gradient to prevent background color
                                cursor: 'pointer'
                            }}
                        >
                            <div className="chroma-img-wrapper">
                                <img src={c.image} alt={c.title} loading="lazy" />
                            </div>
                            <footer className="chroma-info">
                                <h3 className="name" style={{ margin: 0 }}>{c.title}</h3>
                                {c.handle && <span className="handle">{c.handle}</span>}
                                <p className="role" style={{ margin: 0, fontSize: '0.9em' }}>{c.subtitle}</p>
                            </footer>
                        </article>
                    ))}
                    <div className="chroma-overlay" />
                    <div ref={fadeRef} className="chroma-fade" />
                </div>
            </div>
        </div>
    );
}
