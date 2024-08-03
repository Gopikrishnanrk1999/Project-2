
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <button className="navbar-brand" >KELLYADS</button>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">KELLYADS <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        <button className="nav-link">OUR STORY</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">PROJECTS</button>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">CALL US</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar