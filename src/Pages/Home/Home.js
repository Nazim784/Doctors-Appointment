import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg'
import Services from './Services';
import Terms from './Terms';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
           <Info img={clock}></Info>
           <Services></Services>
           <Terms></Terms>
           <MakeAppointment></MakeAppointment>
          
            
        </div>
        
    );
};

export default Home;