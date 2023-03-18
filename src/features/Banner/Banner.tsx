import { Button } from 'antd';
import React from 'react';
import rocket from '../../assets/images/undraw_outer_space_re_u9vd.svg'

const Banner = () => {
    return (
        <section className='' style={{ position: 'relative', marginTop: '7%', height: `calc(100vh - 120px)`, padding: '0 150px' }}>
            <div className="row d-flex align-items-center" style={{ height: 'inherit' }}>
                <div className="col-sm-6 col-md-6" style={{ textAlign: 'left' }}>
                    <h2>Welcome to space!</h2>
                    <h3>Launch into the future with SpaceX rockets</h3>
                    {/* <p>Experience the Future</p> */}
                    <Button size='large' type='default' style={{ marginTop: 20, height: 50, padding: '0 50px' }}>Experience the Future</Button>
                </div>
                <div className="col-sm-6 col-md-6">
                    <img src={rocket} alt="rocket" width={600} />
                </div>
            </div>
        </section>
    );
};

export default React.memo(Banner);