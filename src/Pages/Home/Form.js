import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Form = () => {
    return (
        <div style={{
            background:`url(${appointment})`
        }} className='grid grid-cols-1 gap-4 p-20  items-center '>

            <h3 className='text-primary text-xl'>Contact Us</h3>
            <h1 className='text-4xl text-white'>Conncted with Us</h1>

            <input type="text" placeholder="Email Address" className="input input-bordered   max-w-xs   " />

            <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />

            <input type="text" placeholder="your message" className="input input-bordered input-lg w-full max-w-xs" />
            <div>
                <PrimaryButton className='text-white font-bold justify-center items-center'>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Form;