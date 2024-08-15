import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;
    const totalSlides = 4;
    const slideWidthPercentage = 25;

    const slideForward = () => {
        if (tx > -(totalSlides - 1) * slideWidthPercentage) {
            tx -= slideWidthPercentage;
            slider.current.style.transition = 'transform 0.3s ease';
        } else {
            tx -= slideWidthPercentage;
            slider.current.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                tx = 0;
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(${tx}%)`;
            }, 300);
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += slideWidthPercentage;
            slider.current.style.transition = 'transform 0.3s ease';
        } else {
            tx += slideWidthPercentage;
            slider.current.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                tx = -(totalSlides - 1) * slideWidthPercentage;
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(${tx}%)`;
            }, 300);
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonial' id='testomonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sandra Emily</h3>
                                    <span>New York, USA</span>
                                </div>
                            </div>
                            <p>Edusity has provided me with the best educational resources and a supportive community that has helped me excel in my studies. The experience has been invaluable.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Maria Rodriguez</h3>
                                    <span>Madrid, Spain</span>
                                </div>
                            </div>
                            <p>The professors at Edusity are top-notch, and the curriculum is challenging yet rewarding. I couldn't have asked for a better academic experience.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Hiroshi Tanaka</h3>
                                    <span>Tokyo, Japan</span>
                                </div>
                            </div>
                            <p>Edusity's state-of-the-art facilities and innovative learning methods have made my educational journey both exciting and fulfilling.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Aisha Khan</h3>
                                    <span>Dubai, UAE</span>
                                </div>
                            </div>
                            <p>Studying at Edusity has been a life-changing experience. The diversity of the student body and the global perspective I gained are unmatched.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial;
