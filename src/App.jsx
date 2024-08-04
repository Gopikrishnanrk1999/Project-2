import { Outlet } from 'react-router-dom';
import Footer from './common/Footer';
import Navbar from './common/Navbar';
import '../src/style/common.scss'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
