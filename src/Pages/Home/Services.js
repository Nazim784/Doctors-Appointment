import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat vitae quis!',
            img: fluoride

        },
        {
            _id: 2,
            name: 'Cavity Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat vitae quis!',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth whiteningTreatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat vitae quis!',
            img: whitening

        }
         
    ];
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-xl text-primary font-bold'>Our Service</h3>
                <h2 className='text-4xl'>Services we porvide</h2>
            </div>
        <div className='grid sm:grid-cols-1 gap-4 mx-28 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;