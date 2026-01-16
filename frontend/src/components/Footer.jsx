
import { Typography } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = ({ style }) => {
    return (
        <div style={{ background: '#ffffff', padding: '20px 20px', color: '#000', textAlign: 'center', width: '100%', ...style }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Title level={4} style={{ color: '#000', marginBottom: '20px', fontWeight: 'bold', fontSize: '18px' }}>Contact info:</Title>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
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

export default Footer;
