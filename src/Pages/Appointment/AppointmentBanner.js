import React from 'react';
import chair from '../../assets/images/chair.png'

import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker
              mode='single'
              selected={date}
              onSelect={setDate}
          >
          </DayPicker>
          <p>
            the available appointment : {format(date, 'PP')}
          </p>
        </div>
      </div>

    </div>
  );
};

export default AppointmentBanner;