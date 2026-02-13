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
                { sender: "Babitha", text: "Happy morning mu ❤️" },
                { sender: "Thanga", text: "Good morning 😊❤️" },
                { sender: "Babitha", text: "Love u chlo ❤️" },
                { sender: "Thanga", text: "Love u ma ❤️" },
                { sender: "Babitha", text: "Saptiya? ❤️" },
                { sender: "Thanga", text: "Oiiii ❤️" },
                { sender: "Babitha", text: "Saptiya? ❤️" },
                { sender: "Thanga", text: "Ama enna saptiya? ❤️" },
                { sender: "Babitha", text: "Ama enna sapta? ❤️" },
                { sender: "Babitha", text: "Dosa sambar chutney nee? ❤️" },
                { sender: "Thanga", text: "Na idly sambar chutney 😋❤️" },
                { sender: "Babitha", text: "Nalla saptiya ❤️" },
                { sender: "Thanga", text: "Ama d ❤️" },
                { sender: "Babitha", text: "Velaikku pogaliya? ❤️" },
                { sender: "Thanga", text: "Ponum d ❤️" },
                { sender: "Babitha", text: "Seri pathu poittu va ❤️" },
                { sender: "Thanga", text: "Ahh seri d nee pathu poittu va ❤️" },
                { sender: "Babitha", text: "Love u ma ❤️" },
                { sender: "Thanga", text: "Love u chlo ❤️" },
                { sender: "Babitha", text: "Avvah ❤️" },
                { sender: "Thanga", text: "Avvah ❤️" },
                { sender: "Babitha", text: "Pathu poittu va ❤️" },
                { sender: "Thanga", text: "Ahh seri katta nee pathu poittu va ❤️" },
                { sender: "Babitha", text: "Ahh vaikkean bye ❤️" },
                { sender: "Thanga", text: "Bye d ❤️" }
            ]
        },
        {
            title: "🌤️ Afternoon Conversation",
            messages: [
                { sender: "Babitha", text: "Oii ❤️" },
                { sender: "Thanga", text: "Ahh sollu katta ❤️" },
                { sender: "Babitha", text: "Saptiya? ❤️" },
                { sender: "Thanga", text: "Ama d nee? ❤️" },
                { sender: "Babitha", text: "Ama enna sapta? ❤️" },
                { sender: "Thanga", text: "Soru meenu kulambu poricha meen ❤️ nee enna sapta? ❤️" },
                { sender: "Babitha", text: "Soru meenu rasam ❤️ nalla saptiya? ❤️" },
                { sender: "Thanga", text: "Ama d ❤️ seri katta work irrukku bye ❤️" },
                { sender: "Babitha", text: "Ahh seri mu bye ❤️" }
            ]
        },
        {
            title: "🌙 Night Conversation",
            messages: [
                { sender: "Babitha", text: "Good nyt ma ❤️" },
                { sender: "Thanga", text: "Good nyt d ❤️" },
                { sender: "Babitha", text: "Sweet dreams ❤️" },
                { sender: "Thanga", text: "Sweet dreams ❤️" },
                { sender: "Babitha", text: "Hug u mu ❤️" },
                { sender: "Thanga", text: "Hug u chlo nalla thoongu ❤️" },
                { sender: "Babitha", text: "Ahh seri chlo nee nalla thoongu ❤️" },
                { sender: "Thanga", text: "Ahh seri d ❤️" },
                { sender: "Babitha", text: "Love u ma ❤️" },
                { sender: "Thanga", text: "Love u ma ❤️" },
                { sender: "Babitha", text: "Avvah ❤️" },
                { sender: "Thanga", text: "Avvah ❤️" },
                { sender: "Babitha", text: "Seri bye ❤️" },
                { sender: "Thanga", text: "Ahh bye d ❤️" }
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
