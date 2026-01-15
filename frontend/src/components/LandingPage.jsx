import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import slide1 from '../assets/I1.jpeg';
import slide2 from '../assets/I2.png';
import slide3 from '../assets/l3.png';
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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 30%, #ff6600 100%)'
        }}>
            <Header />
            {/* Left Partition */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'row', minHeight: 'calc(100vh - 80px)' }}>
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
                            fontSize: '15px',
                            lineHeight: '1.6',
                            marginBottom: '40px',
                            opacity: '0.9',
                            color: '#000',
                            maxWidth: '650px',
                            textAlign: 'justify'
                        }}>
                            The Department of Artificial Intelligence (AI) in Healthcare at Kasturba Medical College (KMC), Manipal is a newly established academic and strategic unit dedicated to integrating artificial intelligence with clinical medicine and medical education. Inaugurated in August 2025, it is the first department of its kind in a medical college in India, focusing on advancing AI-driven clinical decision-making, diagnostics, and patient care through research and real-world healthcare solutions, while promoting education, interdisciplinary collaboration, and responsible AI adoption to prepare healthcare professionals for the future of digital medicine.
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
                                        objectFit: 'fill',
                                        flexShrink: 0
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer style={{ background: '#fff' }} />
        </div>
    );
};

export default LandingPage;