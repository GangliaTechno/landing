import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/KMCMAHEMANIPAL.png';
import slide1 from '../assets/I1.png';
import slide2 from '../assets/I2.png';
import slide3 from '../assets/I3.jpeg';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div style={{ height: '100vh', backgroundColor: '#000', color: '#fff', overflow: 'hidden' }}>
            <div style={{ padding: '30px 60px', height: '100%', display: 'flex', flexDirection: 'column' }} className="landing-container">
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', flexShrink: 0 }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={logo} alt="KMC Manipal Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '24px', fontWeight: '600' }}>Kasturba Hospital</span>
                </div>

                {/* Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px',
                    alignItems: 'center',
                    flex: 1
                }} className="content-grid">
                    {/* Left Content */}
                    <div style={{ zIndex: 10 }}>
                        <h1 className="hero-title" style={{
                            fontSize: '90px',
                            fontWeight: '600',
                            lineHeight: '1',
                            marginBottom: '30px',
                            letterSpacing: '-2px'
                        }}>
                            Launching<br />soon
                        </h1>

                        <div className="description" style={{
                            fontSize: '18px',
                            lineHeight: '1.5',
                            marginBottom: '40px',
                            opacity: '0.95'
                        }}>
                            Tech doesn't have to feel like a different language.<br />
                            We built Kasturba to make sure innovation<br />
                            works for you, your business, and your people.<br />
                            We can't wait to innovate with you!
                        </div>

                        <button
                            style={{
                                padding: '20px 50px',
                                border: '2px solid #FFD93D',
                                background: 'transparent',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            className="contact-button"
                            onClick={() => navigate('/contact')}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#fff';
                                e.target.style.color = '#000';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#fff';
                            }}
                        >
                            CONTACT US
                        </button>

                        {/* Social Section */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            gap: '30px',
                            marginTop: '40px'
                        }} className="social-section">
                            <div style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                letterSpacing: '2px'
                            }}>
                                GET SOCIAL
                            </div>
                            <div style={{ width: '100px', height: '1px', background: '#fff' }}></div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                {/* Facebook */}
                                <svg style={{ width: '24px', height: '24px', fill: '#fff', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    viewBox="0 0 24 24" onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}>
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Twitter */}
                                <svg style={{ width: '24px', height: '24px', fill: '#fff', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    viewBox="0 0 24 24" onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}>
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                {/* Instagram */}
                                <svg style={{ width: '24px', height: '24px', fill: '#fff', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    viewBox="0 0 24 24" onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}>
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Gradient Blobs and Image Circle */}
                    <div className="right-content" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="gradient-blob blob-1"></div>
                        <div className="gradient-blob blob-2"></div>
                        <div className="gradient-blob blob-3"></div>

                        {/* Image Circle with Slideshow */}
                        <div
                            className="image-container-animated"
                            style={{
                                position: 'absolute',
                                width: '400px',
                                height: '400px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                top: '50%',
                                right: 'auto',
                                zIndex: 5,
                                background: '#fff',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                            }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                {slides.map((slide, index) => (
                                    <img
                                        key={index}
                                        src={slide}
                                        alt={`Slide ${index + 1}`}
                                        className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: index === currentSlide ? 1 : 0,
                                            transition: 'opacity 1s ease-in-out'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;