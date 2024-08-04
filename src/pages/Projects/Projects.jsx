import React from 'react'
import ImgCards from '../../common/ImgCards'
import '../../style/projects.scss'

const Projects = () => {
    return (
        <div className='project-page'>
            <div className='container'><span className='page-header'>PROJECTS</span></div>
            <ImgCards />
        </div>
    )
}

export default Projects