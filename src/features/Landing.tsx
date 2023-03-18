import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import './Landing.css'
import { useAppDispatch, useAppSelector } from '../customHooks/store';
import { fetchRockets } from '../store/thunks/rocket.thunk';
import { IRocket } from '../interfaces/rocket.interface';
import Banner from './Banner/Banner';
import Rockets from './Rockets/Rockets';
import RocketDetailModal from './Rockets/RocketDetailModal';
import { setFilteredRockets } from '../store/slices/rocket.slice';


const Landing: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedRocket, setSelectedRocket] = useState<IRocket | null>(null);
    const dispatch = useAppDispatch()
    const { rockets, filteredRockets } = useAppSelector(state => state.rocketReducer)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSetSelectRocket = (rocket: IRocket) => {
        setSelectedRocket(rocket)
        showModal()
    }

    useEffect(() => {
        dispatch(fetchRockets())
    }, [])

    const filterActiveRockets = (isActive: boolean) => {
        if(![true, false].includes(isActive)){
            dispatch(setFilteredRockets(rockets))
            return
        }

        let updatedRockets: IRocket[] = JSON.parse(JSON.stringify(rockets))
        updatedRockets = updatedRockets.filter(rocket=> rocket.active === isActive)
        dispatch(setFilteredRockets(updatedRockets))
    }


    return (
        <>
            <Header />
            <Banner />
            <hr style={{ backgroundColor: '#fff' }} />
            <Rockets rockets={filteredRockets} handleSetSelectRocket={handleSetSelectRocket} filterActiveRockets={filterActiveRockets} />
            <RocketDetailModal isModalOpen={isModalOpen} selectedRocket={selectedRocket} handleCancel={handleCancel} />
        </>
    );
};

export default Landing;