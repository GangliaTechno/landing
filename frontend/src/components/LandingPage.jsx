import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import slide1 from '../assets/I1.jpeg';
import slide2 from '../assets/college_replace.jpg';
import slide3 from '../assets/l3.png';
import additionalImg from '../assets/additional_img.jpg';
import sectionImg from '../assets/I4.jpg';
import launchVideo from '../assets/v1.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(1);
    const slides = [slide1, slide2, slide3, additionalImg];

    // Refs for GSAP animation - Section 2
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const sectionRef = useRef(null);

    // Refs for GSAP animation - Section 3 (Cinematic)
    const cinematicTextRef = useRef(null);
    const cinematicVideoRef = useRef(null);
    const cinematicSectionRef = useRef(null);

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

    // GSAP scroll animation for About section
    useEffect(() => {
        // Clear any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        const textElement = textRef.current;
        const imageElement = imageRef.current;
        const sectionElement = sectionRef.current;

        if (!textElement || !imageElement || !sectionElement) {
            return;
        }

        // Create a timeline for coordinated animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: 'top 75%',
                end: 'top 25%',
                toggleActions: 'play none none reverse',
                scrub: 1,
                markers: false
            }
        });

        // Animate image with fade-up and subtle slide from left
        tl.fromTo(imageElement,
            {
                x: -60,
                y: 40,
                opacity: 0,
                scale: 0.95
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out'
            }
        )
            // Animate text with fade-up and subtle slide from right (slight delay)
            .fromTo(textElement,
                {
                    x: 60,
                    y: 40,
                    opacity: 0
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                },
                '-=0.7' // Overlap animations by 0.7s for smooth flow
            );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // GSAP scroll animation for Cinematic Section (Section 3)
    // GSAP scroll animation for Cinematic Section (Section 3)
    useEffect(() => {
        const section = cinematicSectionRef.current;
        const video = cinematicVideoRef.current;
        const textWrapper = cinematicTextRef.current;

        if (!section || !video || !textWrapper) return;

        // Create timeline for section using Section 2's logic
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                end: 'top 25%',
                toggleActions: 'play none none reverse',
                scrub: 1, // Restoring scrub to match Section 2
                markers: false
            }
        });

        // Ensure elements are initially hidden for the animation
        gsap.set([video, textWrapper], { autoAlpha: 0 });

        // Animate video from left (mirroring Section 2's image animation)
        tl.fromTo(video,
            {
                x: -60,
                y: 40,
                autoAlpha: 0,
                scale: 0.95
            },
            {
                x: 0,
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out'
            }
        )
            // Animate text from right (mirroring Section 2's text animation)
            .fromTo(textWrapper,
                {
                    x: 60, // Match Section 2's offset
                    y: 40,
                    autoAlpha: 0
                },
                {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    duration: 1, // Match Section 2's duration
                    ease: 'power2.out'
                },
                '-=0.7'
            );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            background: 'linear-gradient(135deg, #ffffff 0%, #fff5f0 50%, #ff6600 100%)',
            position: 'relative'
        }}>
            <Header />

            {/* Coverflow Carousel */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
                perspective: '1800px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Subtle Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 87, 34, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

                <div className="coverflow-container" style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    height: '480px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
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
                                    width: '420px',
                                    height: '400px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    transform: `
                                        translateX(${offset * 320}px)
                                        rotateY(${offset * -38}deg)
                                        scale(${isActive ? 1.12 : 0.78})
                                        translateZ(${isActive ? 120 : -220}px)
                                    `,
                                    opacity: absOffset > 1 ? 0 : (isActive ? 1 : 0.42),
                                    zIndex: isActive ? 20 : 10 - absOffset,
                                    boxShadow: isActive
                                        ? '0 28px 70px rgba(255, 87, 34, 0.45), 0 0 90px rgba(255, 255, 255, 0.35), 0 12px 45px rgba(0, 0, 0, 0.28)'
                                        : '0 12px 35px rgba(0, 0, 0, 0.38)',
                                    filter: isActive ? 'brightness(1.12) saturate(1.08)' : 'brightness(0.65) saturate(0.85)',
                                    border: isActive ? '2.5px solid rgba(255, 87, 34, 0.35)' : '1.5px solid rgba(255, 255, 255, 0.18)'
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

                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: isActive
                                        ? 'linear-gradient(to bottom, rgba(255, 87, 34, 0.04), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.08))'
                                        : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.18), transparent 50%, rgba(0, 0, 0, 0.28))',
                                    pointerEvents: 'none',
                                    transition: 'all 0.75s ease'
                                }} />
                            </div>
                        );
                    })}
                </div>

                {/* Enhanced Dots Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '14px',
                    zIndex: 100,
                    padding: '12px 24px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
                }}>
                    {slides.map((_, index) => {
                        const activeIndex = currentSlide % slides.length;
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(slides.length + index)}
                                style={{
                                    width: isActive ? '45px' : '12px',
                                    height: '12px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: isActive
                                        ? 'linear-gradient(90deg, #ff5722, #ff8a50)'
                                        : 'rgba(255, 87, 34, 0.25)',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: isActive ? '0 2px 10px rgba(255, 87, 34, 0.5)' : 'none',
                                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Second Section - About Department with Scroll Animation */}
            <div
                ref={sectionRef}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '120px 40px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #fff5f0 50%, #ff6600 100%)',
                }}
            >
                <div style={{
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'flex',
                    gap: '80px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}>
                    {/* Left Column - Image */}
                    <div
                        ref={imageRef}
                        style={{
                            flex: '1 1 450px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={sectionImg}
                            alt="Department of AI in Healthcare"
                            style={{
                                width: '100%',
                                maxWidth: '550px',
                                height: 'auto',
                                borderRadius: '20px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Right Column - Description and Button */}
                    <div
                        ref={textRef}
                        style={{
                            flex: '1 1 450px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px'
                        }}
                    >
                        <h2 style={{
                            fontSize: '48px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            lineHeight: '1.2',
                            marginBottom: '10px',
                            fontFamily: "'Inter', -apple-system, sans-serif"
                        }}>
                            About Our Department
                        </h2>

                        <p style={{
                            fontSize: '17px',
                            lineHeight: '1.8',
                            color: '#333',
                            textAlign: 'justify',
                            fontFamily: "'Inter', -apple-system, sans-serif"
                        }}>
                            The Department of Artificial Intelligence (AI) in Healthcare at Kasturba Medical College (KMC), Manipal is a newly established academic and strategic unit dedicated to integrating artificial intelligence with clinical medicine and medical education. Inaugurated in August 2025, it is the first department of its kind in a medical college in India, focusing on advancing AI-driven clinical decision-making, diagnostics, and patient care through research and real-world healthcare solutions, while promoting education, interdisciplinary collaboration, and responsible AI adoption to prepare healthcare professionals for the future of digital medicine.
                        </p>

                        <button
                            onClick={() => navigate('/contact')}
                            style={{
                                padding: '18px 45px',
                                border: 'none',
                                background: '#ff5722',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '1.5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                borderRadius: '8px',
                                boxShadow: '0 4px 14px rgba(255, 87, 34, 0.4)',
                                alignSelf: 'flex-start',
                                fontFamily: "'Inter', -apple-system, sans-serif"
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#f4511e';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#ff5722';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px rgba(255, 87, 34, 0.4)';
                            }}
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>

            {/* Third Section - Cinematic Split Layout */}
            <div className="cinematic-section" ref={cinematicSectionRef}>
                <div className="cinematic-video-container" ref={cinematicVideoRef}>
                    <video
                        src={launchVideo}
                        className="cinematic-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={sectionImg}
                    />
                    <div className="cinematic-gradient-overlay" />
                </div>

                <div className="cinematic-text-container" ref={cinematicTextRef}>
                    <div className="cinematic-text-content" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <h2 className="cinematic-heading">
                            Launching soon
                        </h2>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;