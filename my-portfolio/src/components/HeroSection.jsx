import myImage from '../assets/profile.jpg';

const HeroSection = () => {
    return (
        <>
            <div className="container-fluid bg-body-tertiary" id='about'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 p-5 mt-5 mb-5">
                            <div className="" style={{ maxWidth: "500px"}}>
                            <h1 className="fs-1">
                                Hi, My Name <br />
                                Is <span className='text-danger-emphasis fw-bold'>Waqar Hussain</span>
                            </h1>
                            <br />
                            <p className="text-body-secondary">
                                I am a passionate React.js developer specializing in building dynamic and responsive web applications. With a strong understanding of React, JavaScript, and modern front-end technologies, I create seamless user experiences. Constantly learning and improving, I strive to develop efficient and scalable solutions.
                            </p>
                            </div>
                        </div>

                        <div className="col-md-6 p-5 d-flex align-items-center justify-content-center mt-5 mb-5">
                            <div className="rounded-circle overflow-hidden m-auto d-flex align-items-center justify-content-center shadow-lg" style={{ maxWidth: "500px", maxHeight: "500px", width: "100%", height: "auto" }}>
                                <img src={myImage} alt="My Image" className="w-100 h-100 object-fit-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection;