import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile App Developer',
        1500,
        'Full Stack Developer',
        1500,
        'Content Creator',
        1500
      ]}
      speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TextEffect;