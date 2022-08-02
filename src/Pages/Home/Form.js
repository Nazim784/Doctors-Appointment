import React from 'react';

const Form = () => {
    return (
        <div className='grid grid-cols-1 justify-content content-center'>


            <input type="text" placeholder="Type here" class="input input-bordered input-xs  max-w-xs  " />

            <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

            <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs" />

            <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />
        </div>
    );
};

export default Form;