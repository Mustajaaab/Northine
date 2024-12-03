import Navbar from "../components/navbar";
import dot from '../assets/images/dot.png'
import orange2 from '../assets/images/orange2.png'
import BGDot from '../assets/images/dotmap.png'
function Team(){
    return(
        <>
       <Navbar/>
            <div
                className="flex justify-center items-center pt-[128px] bg-[#f2f4f3] h-[500px]"
                style={{ backgroundImage: `url(${BGDot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <div >
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-syne font-medium">Home</p>
                            <img src={dot} alt="" className="w-3 h-3"/>
                            <p className="text-lg font-syne font-[100]">Team</p>
                        </div>
                        <h1 className="text-5xl font-syne mt-10 font-semibold">LEADERSHIP TEAM</h1>
                    </div>
                    <div>
                        <img src={orange2} alt="" className="w-[140px]"/>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-2xl font-semibold font-syne mt-[110px]">The leadership team plays a cruical role <br /> in 
            <span className="text-[#f57000]"> guiding and towards</span> success.</h1>
        </>
    )
}
export default Team;