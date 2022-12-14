import React from 'react';
import chair from '../../assets/images/chair.png'

import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({date, setDate}) => {
 

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker
              mode='single'
              selected={date}
              onSelect={setDate}
          >
          </DayPicker>
          
        </div>
      </div>

    </div>
  );
};

export default AppointmentBanner;