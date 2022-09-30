import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const Service = ({ service, setTreatment }) => {
    const { name, slots, img, description, title, designation} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="text-xl text-center font-bold text-secondary">{name}</h2>
                <img src={img} alt="" />
                <p className='text-xl font-bold text-secondary'>{title}</p>
                <p className='text-xl font-bold text-secondary'>{description}</p>
                <p>
                    <p>{designation}</p>
                    <DynamicStar rating={4.5} width={20} height={30} ></DynamicStar>
                    <DynamicStar rating={3} width={20} height={30} ></DynamicStar>
                    <DynamicStar rating={2.5} width={20} height={30} ></DynamicStar>
                </p>
                <p className=''>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;