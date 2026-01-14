import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
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
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 30%, #ff6600 100%)'
        }}>
            <Header />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                {/* Left Partition */}
                <div style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    color: '#000000',
                    padding: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                        <h1 className="hero-title" style={{
                            fontSize: '90px',
                            fontWeight: '600',
                            lineHeight: '1',
                            marginBottom: '30px',
                            letterSpacing: '-2px',
                            color: '#000'
                        }}>
                            Launching<br />soon
                        </h1>

                        <div className="description" style={{
                            fontSize: '18px',
                            lineHeight: '1.5',
                            marginBottom: '40px',
                            opacity: '0.95',
                            color: '#000'
                        }}>
                            The Department of AI in Healthcare at KMC Manipal is dedicated to<br />
                            integrating artificial intelligence with clinical medicine and education.<br />
                            As India's first such department, we advance patient care through innovation<br />
                            and prepare healthcare professionals for the future of digital medicine.
                        </div>

                        <button
                            style={{
                                padding: '20px 50px',
                                border: 'none',
                                background: '#ff5722',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                borderRadius: '4px',
                                boxShadow: '0 4px 14px rgba(255, 87, 34, 0.4)'
                            }}
                            className="contact-button"
                            onClick={() => navigate('/contact')}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#f4511e';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#ff5722';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Right Partition */}
                <div className="right-content" style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <div className="gradient-blob blob-1"></div>
                    <div className="gradient-blob blob-2"></div>
                    <div className="gradient-blob blob-3"></div>

                    {/* Image Circle with Slideshow */}
                    <div
                        className="image-container-animated"
                        style={{
                            position: 'relative',
                            width: '500px',
                            height: '500px',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            zIndex: 5
                        }}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            transition: 'transform 0.5s ease-in-out',
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}>
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="slide-image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        flexShrink: 0
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;