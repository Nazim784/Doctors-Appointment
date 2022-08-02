import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 sm:p-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white p-4'>Make an Appointment today</h2>
                <p className='text-white pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dignissimos sit amet consequuntur, unde magnam cupiditate eum quod libero vero labore molestias delectus fuga excepturi! Facere pariatur numquam aut commodi hic, inventore voluptates, nam sequi mollitia veniam ad nulla nemo.</p>
                <div className='pt-5'>
                <PrimaryButton>To know more</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;