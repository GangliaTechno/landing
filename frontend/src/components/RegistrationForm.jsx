
import { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Row, Col, Typography, message } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import Header from './Header';
import img1 from '../assets/I1.png';
import img2 from '../assets/I2.png';
import img3 from '../assets/I3.jpeg';
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
        message.success('Inquiry sent to aihealthcare.kmc@manipal.edu');
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle initialValue="+91">
            <Select style={{ width: 70 }} disabled>
                <Option value="+91">+91</Option>
            </Select>
        </Form.Item>
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
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: currentImage === index ? 0.3 : 0,
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
                            Please fill in your details to register.
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
                            </Form.Item>

                            {/* Comments / Message */}
                            <Form.Item
                                name="comments"
                                rules={[{ required: true, message: 'Please input your comments!' }]}
                                style={{ marginBottom: '24px' }}
                            >
                                <Input.TextArea
                                    placeholder="Comments / message*"
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
            <div style={{ backgroundColor: '#ff7043', padding: '35px 20px', color: '#000', textAlign: 'center', width: '100%' }}>
                <Title level={4} style={{ color: '#000', marginBottom: '20px', fontWeight: 'bold', fontSize: '18px' }}>Contact info:</Title>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Address */}
                    <div style={{ display: 'flex', textAlign: 'left', gap: '12px' }}>
                        <EnvironmentOutlined style={{ fontSize: '24px', color: '#000' }} />
                        <div>
                            <Text strong style={{ display: 'block', fontSize: '15px', color: '#000', marginBottom: '4px' }}>Address:</Text>
                            <Text style={{ color: '#000', fontSize: '14px', lineHeight: '1.5' }}>
                                Kasturba Medical College<br />
                                Tiger Circle Road, Madhav Nagar, Eshwar Nagar<br />
                                Manipal – 576104, Karnataka, India
                            </Text>
                        </div>
                    </div>

                    {/* Email */}
                    <div style={{ display: 'flex', textAlign: 'left', gap: '12px' }}>
                        <MailOutlined style={{ fontSize: '24px', color: '#000' }} />
                        <div>
                            <Text strong style={{ display: 'block', fontSize: '15px', color: '#000', marginBottom: '4px' }}>Email ID's:</Text>
                            <Text style={{ display: 'block', color: '#000', fontSize: '14px', marginBottom: '2px' }}>
                                dpr.mu@manipal.edu
                            </Text>
                            <Text style={{ display: 'block', color: '#000', fontSize: '14px' }}>
                                aihealthcare.kmc@manipal.edu
                            </Text>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RegistrationForm;