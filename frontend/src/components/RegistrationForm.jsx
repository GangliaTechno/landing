
import { useState } from 'react';
import { Form, Input, Select, Button, Typography, message, ConfigProvider } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';
import Header from './Header';
import Footer from './Footer';
import img1 from '../assets/I1.jpeg';
import img2 from '../assets/College_replace.jpg';
import img3 from '../assets/l3.png';
import './RegistrationForm.css';

const { Title, Text } = Typography;
const { Option } = Select;

const RegistrationForm = () => {
    const [form] = Form.useForm();


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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                padding: '80px 20px',
                background: '#ffffff'
            }}>
                <div style={{ maxWidth: '550px', margin: '0 auto', width: '100%' }}>
                    <Title level={2} style={{
                        marginBottom: '0.3rem',
                        color: '#1a1a1a',
                        fontSize: '28px',
                        fontWeight: '700',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-0.5px'
                    }}>
                        Welcome!
                    </Title>
                    <Text style={{
                        display: 'block',
                        marginBottom: '1.5rem',
                        color: '#666',
                        fontSize: '14px',
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
                                prefix={<MailOutlined style={{ color: '#999', fontSize: '16px' }} />}
                                placeholder="Email address*"
                                style={{
                                    height: '44px',
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
                                    height: '44px',
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
                                prefix={<HomeOutlined style={{ color: '#999', fontSize: '16px' }} />}
                                placeholder="Company / Organization name*"
                                style={{
                                    height: '44px',
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
                                    suffixIcon={<TeamOutlined style={{ fontSize: '16px', color: '#999' }} />}
                                    style={{ height: '44px' }}
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
                                prefix={<MessageOutlined style={{ color: '#999', fontSize: '16px' }} />}
                                placeholder="Comments / message"
                                rows={3}
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
                                    height: '46px',
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
            </div>

            {/* Global Footer */}
            <Footer />

        </div>
    );
};

export default RegistrationForm;
