import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import slide1 from '../assets/I1.jpeg';
import slide2 from '../assets/college_replace.jpg';
import slide3 from '../assets/l3.png';
import additionalImg from '../assets/additional_img.jpg';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [slide1, slide2, slide3, additionalImg];

    // Create extended array for seamless looping
    const extendedSlides = [...slides, ...slides, ...slides];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    // Reset to middle set when reaching end for seamless loop
    useEffect(() => {
        if (currentSlide >= slides.length * 2) {
            setTimeout(() => {
                setCurrentSlide(slides.length);
            }, 600);
        } else if (currentSlide < slides.length) {
            setTimeout(() => {
                setCurrentSlide(slides.length * 2 - 1);
            }, 600);
        }
    }, [currentSlide, slides.length]);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5f0 50%, #ff6600 100%)',
            position: 'relative'
        }}>
            {/* Animated Dotted Background */}
            <div className="animated-dots-background" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="3" cy="3" r="2" fill="rgba(255, 87, 34, 0.4)">
                                <animate attributeName="r" values="2;3.5;2" dur="3s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
                            </circle>
                        </pattern>
                        <pattern id="dotPattern2" x="15" y="15" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="3" cy="3" r="2" fill="rgba(255, 87, 34, 0.3)">
                                <animate attributeName="r" values="2;3;2" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                            </circle>
                        </pattern>
                        <pattern id="dotPattern3" x="7" y="7" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="3" cy="3" r="1.5" fill="rgba(255, 255, 255, 0.5)">
                                <animate attributeName="r" values="1.5;2.5;1.5" dur="3.5s" repeatCount="indefinite" begin="1s" />
                                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3.5s" repeatCount="indefinite" begin="1s" />
                            </circle>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dotPattern)" />
                    <rect width="100%" height="100%" fill="url(#dotPattern2)" />
                    <rect width="100%" height="100%" fill="url(#dotPattern3)" />
                </svg>
            </div>
            <Header />

            {/* Hero Section - Split Partitioned Layout */}
            <div className="hero-section" style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 40px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 'calc(100vh - 80px)'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    zIndex: 10,
                    position: 'relative',
                    flexWrap: 'wrap'
                }}>
                    {/* Left Partition: Carousel */}
                    <div style={{
                        flex: '1 1 600px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        perspective: '1800px',
                        position: 'relative'
                    }}>
                        <div className="coverflow-container" style={{
                            position: 'relative',
                            width: '100%',
                            height: '550px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {extendedSlides.map((slide, index) => {
                                const offset = index - currentSlide;
                                const isActive = index === currentSlide;
                                const absOffset = Math.abs(offset);

                                if (absOffset > 2) return null;

                                return (
                                    <div
                                        key={index}
                                        className="coverflow-slide"
                                        style={{
                                            position: 'absolute',
                                            width: '380px',
                                            height: '350px',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'all 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                            transform: `
                                                translateX(${offset * 180}px)
                                                rotateY(${offset * -35}deg)
                                                scale(${isActive ? 1.1 : 0.75})
                                                translateZ(${isActive ? 100 : -200}px)
                                            `,
                                            opacity: absOffset > 1 ? 0 : (isActive ? 1 : 0.45),
                                            zIndex: isActive ? 20 : 10 - absOffset,
                                            boxShadow: isActive
                                                ? '0 28px 70px rgba(255, 87, 34, 0.4), 0 0 90px rgba(255, 255, 255, 0.3), 0 12px 45px rgba(0, 0, 0, 0.25)'
                                                : '0 12px 35px rgba(0, 0, 0, 0.35)',
                                            filter: isActive ? 'brightness(1.1) saturate(1.05)' : 'brightness(0.6) saturate(0.8)',
                                            border: isActive ? '2.5px solid rgba(255, 87, 34, 0.3)' : '1.5px solid rgba(255, 255, 255, 0.15)'
                                        }}
                                        onClick={() => setCurrentSlide(index)}
                                    >
                                        <img
                                            src={slide}
                                            alt={`Slide ${(index % slides.length) + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    <div className="hero-content" style={{
                        flex: '1 1 500px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        <h1 style={{
                            fontSize: '56px',
                            fontWeight: '800',
                            color: '#1a1a1a',
                            lineHeight: '1.2',
                            margin: 0,
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            About Us
                        </h1>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#444',
                            maxWidth: '600px',
                            margin: 0,
                            textAlign: 'justify'
                        }}>
                            The Department of Artificial Intelligence (AI) in Healthcare at Kasturba Medical College (KMC), Manipal is a newly established academic and strategic unit dedicated to integrating artificial intelligence with clinical medicine and medical education. Inaugurated in August 2025, it is the first department of its kind in a medical college in India, focusing on advancing AI-driven clinical decision-making, diagnostics, and patient care through research and real-world healthcare solutions, while promoting education, interdisciplinary collaboration, and responsible AI adoption to prepare healthcare professionals for the future of digital medicine.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                            <button
                                onClick={() => navigate('/register')}
                                style={{
                                    padding: '18px 40px',
                                    background: '#ff5722',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(255, 87, 34, 0.3)'
                                }}
                            >
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(255, 87, 34, 0.05) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;
