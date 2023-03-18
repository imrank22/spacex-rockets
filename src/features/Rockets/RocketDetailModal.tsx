import { Modal } from 'antd';
import React from 'react';
import { IRocket } from '../../interfaces/rocket.interface';

interface IRocketModalProps{
    selectedRocket: IRocket | null,
    isModalOpen: boolean,
    handleCancel: () => void
}

const RocketDetailModal = ({selectedRocket, isModalOpen, handleCancel}: IRocketModalProps) => {
    return (
        <Modal
            title={`${selectedRocket?.company} - ${selectedRocket?.rocket_name}`}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
        >
            <hr style={{ color: '#6666' }} />
            <div style={{ padding: 10 }}>
                <div className='rocket-detail__row'>
                    <span>Country</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.country}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Engine Layout</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.engines.layout}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Engine Propellant</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.engines.propellant_1}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Engine Type</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.engines.type}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Engine Version</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.engines.version}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Stages</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.stages}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>First Flight</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.first_flight}</span>
                </div>
                <div className='rocket-detail__row'>
                    <span>Cost Per Launch</span>
                    <span style={{ margin: '0 10px' }}>:</span>
                    <span>{selectedRocket?.cost_per_launch}</span>
                </div>
            </div>
        </Modal>
    );
};

export default React.memo(RocketDetailModal);