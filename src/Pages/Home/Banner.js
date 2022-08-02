import React from 'react';
import chair from '../../../src/assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your new smile starts from here</h1>
      <p class="py-6 pr-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis obcaecati eveniet consectetur incidunt! Molestiae, sequi! Debitis culpa explicabo, cum dolorum ut neque, quam illo, harum impedit voluptate officia amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus magni, nulla dicta ea iste!</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;