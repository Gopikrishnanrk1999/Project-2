import Footer from './common/Footer';
import Navbar from './common/Navbar';
import HomePage from './pages/Homepage/HomePage';
import '../src/style/common.scss'
import ImgCards from './common/ImgCards';
import Projects from './pages/Projects/Projects';

function App() {

  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      {/* <ImgCards /> */}
      <Projects />
      <Footer />
    </>
  )
}

export default App
