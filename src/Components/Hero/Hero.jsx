import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better eduction for a better world</h1>
            <p>Innovatia University fosters innovation, creativity, and technology-driven education, empowering students to excel in global leadership. Our programs blend hands-on learning with innovative thinking for extraordinary achievements.</p>
            <button className='btn '>Explore More <img src={darkArrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero