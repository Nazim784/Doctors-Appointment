import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg'
import Services from './Services';
import Terms from './Terms';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
           <Info img={clock}></Info>
           <Services></Services>
           <Terms></Terms>
          
            
        </div>
        
    );
};

export default Home;