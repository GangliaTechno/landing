
import { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Row, Col, Typography, message, ConfigProvider } from 'antd';
import Header from './Header';
import Footer from './Footer';
import img1 from '../assets/I1.jpeg';
import img2 from '../assets/I2.png';
import img3 from '../assets/l3.png';
import './RegistrationForm.css';

const { Title, Text } = Typography;
const { Option } = Select;

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img1, img2, img3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const onFinish = (values) => {
        console.log('Received values from form: ', values);

        const subject = `New Inquiry: ${values.collaborationType} - ${values.company}`;
        const body = `
New Inquiry Received:

Email: ${values.email}
Phone: ${values.prefix || '+91'} ${values.phone}
Company/Organization: ${values.company}
Collaboration Type: ${values.collaborationType}

Message:
${values.comments}
        `;

        const mailtoLink = `mailto:aihealthcare.kmc@manipal.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        message.success('Opening your email client...');
    };

    const prefixSelector = (
        <span style={{
            fontSize: '15px',
            fontWeight: '500',
            color: '#1a1a1a',
            padding: '0 4px',
            fontFamily: "'Inter', sans-serif"
        }}>+91</span>
    );

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            <Header />
            <Row className="registration-row">
                {/* Left Column - Branding/Marketing with Image Slideshow */}
                <Col xs={24} md={10} className="marketing-col">
                    {/* Background Image Loop */}
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${img})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                opacity: currentImage === index ? 1 : 0,
                                transition: 'opacity 1.2s ease-in-out',
                                zIndex: 0
                            }}
                        />
                    ))}

                    {/* Overlay Content - Removed */}
                </Col>

                {/* Right Column - Registration Form */}
                <Col xs={24} md={14} className="form-col">
                    <div style={{ maxWidth: '550px', margin: '0 auto', width: '100%' }}>
                        <Title level={2} style={{
                            marginBottom: '0.5rem',
                            color: '#1a1a1a',
                            fontSize: '36px',
                            fontWeight: '700',
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: '-0.5px'
                        }}>
                            Welcome!
                        </Title>
                        <Text style={{
                            display: 'block',
                            marginBottom: '2.5rem',
                            color: '#666',
                            fontSize: '16px',
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: '1.6'
                        }}>
                            Kindly provide your details for further communication
                        </Text>

                        <Form
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            layout="vertical"
                            scrollToFirstError
                            size="large"
                        >
                            {/* Email Address */}
                            <Form.Item
                                name="email"
                                rules={[
                                    { type: 'email', message: 'The input is not valid E-mail!' },
                                    { required: true, message: 'Please input your E-mail!' },
                                ]}
                                style={{ marginBottom: '20px' }}
                            >
                                <Input
                                    placeholder="Email address*"
                                    style={{
                                        height: '52px',
                                        borderRadius: '6px',
                                        border: '1.5px solid #595959',
                                        fontSize: '15px',
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        color: '#1a1a1a'
                                    }}
                                    className="custom-input"
                                />
                            </Form.Item>

                            {/* Phone Number */}
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                                style={{ marginBottom: '20px' }}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    placeholder="Phone number*"
                                    style={{
                                        height: '52px',
                                        borderRadius: '6px',
                                        fontSize: '15px',
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: '500',
                                        color: '#1a1a1a'
                                    }}
                                    className="custom-input-with-addon"
                                />
                            </Form.Item>

                            {/* Company / Organization Name */}
                            <Form.Item
                                name="company"
                                rules={[{ required: true, message: 'Please input your Company / Organization name!' }]}
                                style={{ marginBottom: '20px' }}
                            >
                                <Input
                                    placeholder="Company / Organization name*"
                                    style={{
                                        height: '52px',
                                        borderRadius: '6px',
                                        border: '1.5px solid #595959',
                                        fontSize: '15px',
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        color: '#1a1a1a'
                                    }}
                                    className="custom-input"
                                />
                            </Form.Item>

                            {/* Collaboration Type */}
                            <Form.Item
                                name="collaborationType"
                                rules={[{ required: true, message: 'Please select collaboration type!' }]}
                                style={{ marginBottom: '20px' }}
                            >
                                <ConfigProvider theme={{
                                    token: {
                                        colorPrimary: '#ff5722',
                                        colorBorder: '#595959',
                                        colorPrimaryHover: '#ff5722',
                                    }
                                }}>
                                    <Select
                                        placeholder="Collaboration type*"
                                        suffixIcon={<span style={{ fontSize: '12px', color: '#999' }}>▼</span>}
                                        style={{ height: '52px' }}
                                        className="custom-select-registration"
                                    >
                                        <Option value="academic">Academic</Option>
                                        <Option value="research">Research</Option>
                                        <Option value="innovation">Innovation</Option>
                                        <Option value="project">Project</Option>
                                    </Select>
                                </ConfigProvider>
                            </Form.Item>

                            {/* Comments / Message */}
                            <Form.Item
                                name="comments"
                                rules={[{ required: false }]}
                                style={{ marginBottom: '24px' }}
                            >
                                <Input.TextArea
                                    placeholder="Comments / message"
                                    rows={4}
                                    style={{
                                        borderRadius: '6px',
                                        border: '1.5px solid #595959',
                                        fontSize: '15px',
                                        padding: '12px 14px',
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        lineHeight: '1.6',
                                        color: '#1a1a1a'
                                    }}
                                    className="custom-input"
                                />
                            </Form.Item>

                            {/* Submit Button */}
                            <Form.Item style={{ marginBottom: '0' }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        backgroundColor: '#ff5722',
                                        borderColor: '#ff5722',
                                        height: '54px',
                                        borderRadius: '6px',
                                        fontWeight: '600',
                                        fontSize: '17px',
                                        boxShadow: '0 2px 8px rgba(255, 87, 34, 0.25)',
                                        fontFamily: "'Inter', sans-serif",
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="submit-button"
                                >
                                    Submit Inquiry
                                </Button>
                            </Form.Item>
                        </Form>


                    </div>
                </Col>
            </Row>

            {/* Global Footer */}
            <Footer />

        </div>
    );
};

export default RegistrationForm;
