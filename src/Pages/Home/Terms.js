import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Terms = () => {
    return (
        <div className='content-center mt-{-5} px-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Exceptional Dental care, on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>To know more</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;