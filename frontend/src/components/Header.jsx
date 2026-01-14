import { useNavigate } from 'react-router-dom';
import { Row, Col, Typography, Space, Divider } from 'antd';
import { BankOutlined, TrophyOutlined, StarFilled } from '@ant-design/icons';

import logo from '../assets/KMCMAHEMANIPAL.png';

const { Title, Text } = Typography;

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header" style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '10px 0', height: 'auto' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Row align="middle" justify="space-between">
                    {/* Left: Logo Section */}
                    <Col>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                            <img src={logo} alt="Kasturba Medical College Logo" style={{ height: '60px', width: '60px', objectFit: 'cover', borderRadius: '50%' }} />
                            <div>
                                <Title level={3} style={{ margin: 0, lineHeight: 1.2, fontFamily: 'Outfit, sans-serif', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#d32f2f' }}>
                                    Kasturba Medical College
                                </Title>
                                <Text style={{ fontSize: '12px', display: 'block', letterSpacing: '2px', color: '#666', textTransform: 'uppercase', fontWeight: 600 }}>
                                    Manipal Academy of Higher Education
                                </Text>
                                <Text type="secondary" italic style={{ fontSize: '10px' }}>
                                    (Institution of Eminence Deemed to be University)
                                </Text>
                            </div>
                        </div>
                    </Col>

                    {/* Right: Accolades Section */}
                    <Col>
                        <Space split={<Divider type="vertical" style={{ height: '40px', borderColor: '#ccc' }} />}>
                            {/* Institution of Eminence */}
                            <div style={{ textAlign: 'center' }}>
                                <Text style={{ display: 'block', fontSize: '10px', fontWeight: 'bold', color: '#555', lineHeight: 1 }}>INSTITUTION OF</Text>
                                <div style={{ background: '#f57c00', color: '#fff', padding: '2px 8px', fontSize: '12px', fontWeight: 'bold' }}>
                                    EMINENCE
                                </div>
                            </div>

                            {/* NAAC Badge */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <div style={{ border: '2px solid #666', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: '8px', fontWeight: 'bold' }}>NAAC</Text>
                                    <Text style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: 1, color: '#f57c00' }}>A++</Text>
                                    <Text style={{ fontSize: '6px' }}>GRADE</Text>
                                </div>
                            </div>

                            {/* NIRF Badge */}
                            <div style={{ textAlign: 'left' }}>
                                <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>NIRF</Text>
                                <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#f57c00', marginLeft: '2px' }}>#3</Text>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Header;
