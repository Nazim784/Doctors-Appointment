import React from 'react';
import chair from '../../../src/assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
  return (
            <div hero min-h-screen style={{
              background:`url(${bg})`
            }} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl " />
        <div>
          <h1 className="text-5xl font-bold">Your new smile starts from here</h1>
          <p className="py-6 pr-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis obcaecati eveniet consectetur incidunt! Molestiae, sequi! Debitis culpa explicabo, cum dolorum ut neque, quam illo, harum impedit voluptate officia amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus magni, nulla dicta ea iste!</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>

    // <div className="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Banner;