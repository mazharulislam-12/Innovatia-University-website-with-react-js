import './Program.css'
import Program_1 from '../../assets/program-1.png'
import Program_2 from '../../assets/program-2.png'
import Program_3 from '../../assets/program-3.png'
import Program_icon_1 from '../../assets/program-icon-1.png'
import Program_icon_2 from '../../assets/program-icon-2.png'
import Program_icon_3 from '../../assets/program-icon-3.png'

const Program = () => {
    return (
        <div className='programs' id='program'>
            <div className="program">
                <img src={Program_1} alt="Graduation Degree" />
                <div className="caption">
                    <img src={Program_icon_1} alt="Graduation Degree Icon" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_2} alt="Master Degree" />
                <div className="caption">
                    <img src={Program_icon_2} alt="Master Degree Icon" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_3} alt="Post Degree" />
                <div className="caption">
                    <img src={Program_icon_3} alt="Post Degree Icon" />
                    <p>Post Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Program
