import React from 'react';
import About from '../About/About/About';
import Services from '../Services/Services';
import AppoinmentBanner from './ApointmentBanner/AppoinmentBanner';
import Bannner from './Banner/Bannner';
import Navigation from './Shared/Navigation/Navigation';
import Testomunials from './Testomunials/Testomunials';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Bannner></Bannner>
            <Services></Services>
            <About></About>
            <AppoinmentBanner></AppoinmentBanner>
            <Testomunials></Testomunials>
        </div>
    );
};

export default Home;