import img from '../assets/companyLogo.svg'
import '../style/footer.scss'

const Footer = () => {
    return (
        <div className="footer container bg-transparent">
            <hr />
            <div className='row p-5'>
                <div className="company-logo col-sm"><img src={img} alt='logo' /></div>
                <div className="footer-page-btns col-sm">
                    <button className='btn' type='button'>HOME</button>
                    <button className='btn' type='button'>ABOUT</button>
                    <button className='btn' type='button'>PROJECTS</button>
                    <button className='btn' type='button'>CONTACT</button>
                </div>
                <div className="social-media-links col-sm">
                    <button className='btn btn-light' type='button'>CONTACT</button>
                    <button className='btn btn-light' type='button'>CONTACT</button>
                    <button className='btn btn-light' type='button'>CONTACT</button>
                </div>
            </div>
            <hr />
        </div >
    )
}

export default Footer