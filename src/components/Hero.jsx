import code from '../assets/code.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nisi
            quaerat sit consectetur itaque animi dolore, assumenda esse natus
            sapiente, nesciunt provident maxime nam! Cumque quia excepturi
            voluptates in nam.
          </p>
        </div>
        <div className='img-container'>
          <img src={code} alt='' className='img ' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
