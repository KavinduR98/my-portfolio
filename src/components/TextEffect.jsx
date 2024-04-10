import { TypeAnimation } from 'react-type-animation';
import '../../src/index.css'

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Freelancer',
        1500,
        'Full Stack Developer',
        1500,
        'Content Creator',
        1500
      ]}
      speed={50}
      style={{fontWeight: "bold", fontSize: '1.5em', display: 'inline-block', color: "#2dfc5a"}}
      repeat={Infinity}
    />
  );
};

export default TextEffect;