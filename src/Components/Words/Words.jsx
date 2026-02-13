import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Words = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".chat-section", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out"
            });

            gsap.from(".message", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                delay: 0.5,
                ease: "back.out(1.2)"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const conversations = [
        {
            title: "☀️ Morning Conversation",
            messages: [
                { sender: "Thanga", text: "Happy morning ❤️" },
                { sender: "Babitha", text: "Love you ma" },
                { sender: "Thanga", text: "Good morning 😊" },
                { sender: "Babitha", text: "Love u chlo" },
                { sender: "Thanga", text: "Oiiii" },
                { sender: "Babitha", text: "Avvah 👍" },
                { sender: "Thanga", text: "Saptiya?" },
                { sender: "Babitha", text: "Ama nee saptiya?" },
                { sender: "Thanga", text: "Ama enna sapta?" },
                { sender: "Babitha", text: "Dosa sambar chutney nee?" },
                { sender: "Thanga", text: "Na idly sambar chutney 😋" },
                { sender: "Babitha", text: "Avvah" },
                { sender: "Thanga", text: "Enga irrukka?" },
                { sender: "Babitha", text: "v2la?" },
                { sender: "Thanga", text: "Seri katta pappom ✨" },
                { sender: "Babitha", text: "Avvah ❤️" },
            ]
        },
        {
            title: "😊 Happy Mood — Fun Conversation",
            messages: [
                { sender: "Thanga", text: "Oii pondatti ❤️" },
                { sender: "Babitha", text: "Sollu ma thango 💕" },
                { sender: "Thanga", text: "Chlo kutty ma" },
                { sender: "Babitha", text: "Sollu surgimah 😊" },
                { sender: "Thanga", text: "Kalli ❤️" },
                { sender: "Babitha", text: "Kirrukki 🥰" },
                { sender: "Thanga", text: "Komba 😍" },
                { sender: "Babitha", text: "Katta 💪" },
                { sender: "Thanga", text: "Muuu" },
                { sender: "Babitha", text: "Ammu 💕" },
                { sender: "Thanga", text: "Amma ❤️" },
                { sender: "Babitha", text: "Chlo kutty" },
                { sender: "Thanga", text: "Kutty ma 🥺" },
                { sender: "Babitha", text: "Thanga pilla" },
                { sender: "Thanga", text: "Mama 😄" },
                { sender: "Babitha", text: "Purusha 💙" },
                { sender: "Thanga", text: "Ammaiyo 🤪" },
                { sender: "Babitha", text: "Thangamea ❤️" },
                { sender: "Thanga", text: "Appea 😘" },
            ]
        },
        {
            title: "🌙 Night Conversation",
            messages: [
                { sender: "Thanga", text: "Saptiya ma?" },
                { sender: "Babitha", text: "Ama nee saptiya?" },
                { sender: "Thanga", text: "Ama enna sapta?" },
                { sender: "Babitha", text: "Dosa ❤️ nee?" },
                { sender: "Thanga", text: "Idly 😋" },
                { sender: "Babitha", text: "Love u ma" },
                { sender: "Thanga", text: "Love thango" },
                { sender: "Babitha", text: "Good nyt 🌙" },
                { sender: "Thanga", text: "Sweet dreams ✨" },
                { sender: "Babitha", text: "Miss you chellokutty 🥺" },
                { sender: "Thanga", text: "Nalla thoongu ma" },
                { sender: "Babitha", text: "Pathu iru ma" },
                { sender: "Thanga", text: "Safe ah iru" },
                { sender: "Babitha", text: "Bye bye 👋" },
                { sender: "Thanga", text: "Poittu varean" },
                { sender: "Babitha", text: "Pathu po 🫂" },
                { sender: "Thanga", text: "Hug you ❤️" },
                { sender: "Babitha", text: "Love you ❤️" },
            ]
        }
    ];

    return (
        <div ref={containerRef} style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            // background: 'linear-gradient(to bottom, #fff0f5, #fff)',
            overflow: 'hidden',
            alignItems: 'center' // Center the container
        }}>
            {/* Fixed Header */}
            <div style={{
                textAlign: 'center',
                paddingTop: '70px', // Slightly reduced from 80px
                paddingBottom: '10px',
                flexShrink: 0,
                zIndex: 2,
                width: '100%'
            }}>
                <h1 style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '3rem', // Slightly smaller to fit better
                    color: '#c2255c',
                    marginBottom: '5px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>Our Daily Love ❤️</h1>
                <h2 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1rem',
                    color: '#862e9c',
                    fontWeight: '500',
                    margin: 0
                }}>ThangaSurgithan & T S Babitha</h2>
            </div>

            {/* Unified Scrollable Chat Container */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                width: '90%',
                maxWidth: '700px', // Restrained width for "App" feel
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // The "Container look"
                backdropFilter: 'blur(10px)',
                borderRadius: '30px', // Fully rounded corners
                padding: '20px',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                marginBottom: '20px', // Changed from '0' to '20px'
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
                <style>
                    {`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>
                {conversations.map((section, index) => (
                    <div key={index} className="chat-section" style={{
                        width: '100%',
                        // removed card styling to blend into main container
                        paddingBottom: '20px',
                        borderBottom: index !== conversations.length - 1 ? '1px solid #ffe3ec' : 'none'
                    }}>
                        <h3 style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '1.2rem',
                            color: '#e64980',
                            marginBottom: '20px',
                            textAlign: 'center',
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>{section.title}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {section.messages.map((msg, msgIndex) => {
                                const isThanga = msg.sender === 'Thanga';
                                return (
                                    <div key={msgIndex} className="message" style={{
                                        alignSelf: isThanga ? 'flex-end' : 'flex-start',
                                        maxWidth: '85%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: isThanga ? 'flex-end' : 'flex-start'
                                    }}>
                                        <div style={{
                                            fontSize: '0.7rem',
                                            color: '#adb5bd',
                                            marginBottom: '2px',
                                            marginLeft: '10px',
                                            marginRight: '10px'
                                        }}>
                                            {msg.sender}
                                        </div>
                                        <div style={{
                                            backgroundColor: isThanga ? '#4dabf7' : '#ff8787',
                                            color: 'white',
                                            padding: '10px 16px',
                                            borderRadius: isThanga ? '18px 18px 4px 18px' : '18px 18px 18px 4px', // More chat-like bubble radius
                                            fontSize: '0.95rem',
                                            fontFamily: "'Open Sans', sans-serif",
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                            lineHeight: '1.4'
                                        }}>
                                            {msg.text}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                {/* Spacer at bottom */}
                <div style={{ height: '50px' }}></div>
            </div>
        </div>
    );
};

export default Words;
