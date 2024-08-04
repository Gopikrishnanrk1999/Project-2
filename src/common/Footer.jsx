import { useNavigate } from 'react-router-dom'
import img from '../assets/companyLogo.svg'
import '../style/footer.scss'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="footer container bg-transparent">
            <hr />
            <div className='row p-5'>
                <div className="company-logo col-sm"><img src={img} alt='logo' /></div>
                <div className="footer-page-btns col-sm">
                    <button className='btn' type='button' onClick={() => navigate('/')}>HOME</button>
                    <button className='btn' type='button'>ABOUT</button>
                    <button className='btn' type='button' onClick={() => navigate('/projects')}>PROJECTS</button>
                    <button className='btn' type='button'>CONTACT</button>
                </div>
                <div className="social-media-links col-sm">
                    <button className='btn' type='button'>CONTACT</button>
                    <button className='btn' type='button'>CONTACT</button>
                    <button className='btn' type='button'>CONTACT</button>
                </div>
            </div>
            <hr />
        </div >
    )
}

export default Footer