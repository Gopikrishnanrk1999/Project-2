import React from 'react'
import companyLogo from '../../assets/companyLogo.svg'
import ImgCards from '../../common/ImgCards'

const HomePage = () => {
    return (
        <>
            <div className='home-page-banner d-flex'>
                <div className=''><img src={companyLogo} alt='...' /></div>
                <div className='banner-txt'>WE DON’T ADVERTISE, WE MAKE IMPRESSIONS.</div>
            </div>
            <div className='project-list-home'>
                <ImgCards />
            </div>
            <div className='contact-us container d-flex'>
                <div className='contact-desc'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <form className='contact-us-form w-100'>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="First name" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Company</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Phone</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="1234567890" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Email</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="samuel@mail.com" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Date</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Date" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Select</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Select Service" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button className='btn btn-dark'>Book Now </button>
                </form>
            </div>
        </>
    )
}

export default HomePage