import React from 'react';
import Services from '../Services/Services';
import AppoinmentBanner from './ApointmentBanner/AppoinmentBanner';
import Bannner from './Banner/Bannner';
import Navigation from './Shared/Navigation/Navigation';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Bannner></Bannner>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;