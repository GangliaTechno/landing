import { useNavigate } from 'react-router-dom';
import { Row, Col, Typography, Space, Divider } from 'antd';
import logo from '../assets/KMCMAHEMANIPAL.png';
import './Header.css';

const { Title, Text } = Typography;

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header" style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', padding: '25px 0' }}>
            <div className="container" style={{ width: '100%', padding: '0' }}>
                <Row align="middle" justify="start" gutter={[16, 0]} wrap={false}>
                    {/* Left: Logo Section */}
                    <Col flex="none">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginLeft: '-10px' }} onClick={() => navigate('/')}>
                            <img
                                src={logo}
                                alt="Kasturba Medical College Logo"
                                style={{
                                    height: '55px',
                                    width: '55px',
                                    objectFit: 'contain'
                                }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Title level={4} style={{
                                    margin: 0,
                                    lineHeight: '1.2',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    color: '#c62828',
                                    letterSpacing: '0.3px',
                                    whiteSpace: 'nowrap'
                                }}>
                                    DEPARTMENT OF ARTIFICIAL INTELLIGENCE IN HEALTHCARE
                                </Title>
                                <Text style={{
                                    fontSize: '13px',
                                    letterSpacing: '1.5px',
                                    color: '#666',
                                    fontWeight: '500',
                                    marginTop: '2px'
                                }}>
                                    KASTURBA MEDICAL COLLEGE
                                </Text>
                                <Text italic style={{
                                    fontSize: '11px',
                                    color: '#999',
                                    marginTop: '1px'
                                }}>
                                    (A constituent unit of MAHE, Manipal)
                                </Text>
                            </div>
                        </div>
                    </Col>

                    <Col flex="none" style={{ marginLeft: 'auto' }}>
                        <Space
                            size="small"
                            split={<Divider type="vertical" style={{ height: '40px', borderColor: '#d9d9d9', margin: '0 15px' }} />}
                            align="center"
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40px'
                            }}>
                                <Text style={{
                                    fontSize: '8px',
                                    fontWeight: '600',
                                    color: '#333',
                                    lineHeight: 1,
                                    letterSpacing: '0.5px'
                                }}>
                                    INSTITUTION OF
                                </Text>
                                <div style={{
                                    background: '#ff6f00',
                                    color: '#fff',
                                    padding: '2px 10px',
                                    fontSize: '10px',
                                    fontWeight: 'bold',
                                    marginTop: '2px',
                                    letterSpacing: '0.5px'
                                }}>
                                    EMINENCE
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40px'
                            }}>
                                <div style={{
                                    border: '2px solid #333',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: '8px',
                                        fontWeight: 'bold',
                                        lineHeight: 1,
                                        color: '#333'
                                    }}>
                                        NAAC
                                    </Text>
                                    <Text style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        lineHeight: 1.1,
                                        color: '#333',
                                        margin: '2px 0'
                                    }}>
                                        A++
                                    </Text>
                                    <Text style={{
                                        fontSize: '6px',
                                        color: '#666',
                                        lineHeight: 1
                                    }}>
                                        GRADE
                                    </Text>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40px'
                            }}>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    lineHeight: 1
                                }}>
                                    NIRF
                                </Text>
                                <Text style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#ff6f00',
                                    marginLeft: '4px',
                                    lineHeight: 1
                                }}>
                                    #3
                                </Text>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Header;