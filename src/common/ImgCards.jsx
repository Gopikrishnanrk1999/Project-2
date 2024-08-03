import img1 from '../assets/Projects_page0_image.png'
import img2 from '../assets/Projects_page1_image.png'
import img3 from '../assets/Projects_page2_image.png'
import img4 from '../assets/Projects_page3_image.png'
import img5 from '../assets/Projects_page5_image.png'


const ImgCards = () => {

    const imgList = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2, img3, img4, img5]

    return (
        <div className="container">
            <div className="row">
                <div className="row row-cols-3">
                    {imgList.map(each =>
                        <div key={each} className="col p-2 img-container">
                            <img src={each} className="img-card" alt="img" />
                        </div>)}
                </div>
            </div >
        </div>
    )
}

export default ImgCards