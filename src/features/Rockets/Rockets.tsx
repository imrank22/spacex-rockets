import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Pagination, PaginationProps, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { IRocket } from '../../interfaces/rocket.interface';
import SearchForm from './SearchForm';

export interface IRocketProps {
    rockets: IRocket[],
    handleSetSelectRocket: (rocket: IRocket) => void,
    filterActiveRockets: (isActive: boolean) => void
}

const Rockets = ({ rockets, handleSetSelectRocket, filterActiveRockets }: IRocketProps) => {

    return (
        <section className='rockets' style={{ padding: '50px 150px' }}>
            <h3>Explore the future</h3>

            <div className="d-grid rocket-section">
                <SearchForm filterActiveRockets={filterActiveRockets} />
                <div>
                    <Row gutter={30}>
                        {
                            rockets?.map(rocket => {
                                return <Col key={rocket.rocket_id} span={6} style={{ marginBottom: 40 }}>
                                    <Card
                                        cover={
                                            <img
                                                alt="rocket"
                                                src={rocket?.flickr_images[0]}
                                                style={{ height: 200 }}
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <Button size='small' onClick={() => handleSetSelectRocket(rocket)}>Details</Button>,
                                        ]}
                                    >
                                        <Meta
                                            title={rocket.rocket_name}
                                            description={rocket.description}
                                        />
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                    <Pagination defaultCurrent={1} total={rockets.length} pageSize={10} />;
                </div>
            </div>
        </section>
    );
};

export default React.memo(Rockets);