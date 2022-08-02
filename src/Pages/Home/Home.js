import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg'
import Services from './Services';
import Terms from './Terms';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Form from './Form';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
           <Info img={clock}></Info>
           <Services></Services>
           <Terms></Terms>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Form></Form>
          
            
        </div>
        
    );
};

export default Home;