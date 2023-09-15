import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackToTop from './BackToTop'
import { motion } from 'framer-motion';


const Layout = ({setSategoryVal,categoryVal ,setitem , item }) => {
  
  return (
    <div >
        <Header setSategoryVal={setSategoryVal} categoryVal={categoryVal} item={item} setitem={setitem}/>
        <BackToTop/>
          <motion.div 
            variants={{hidden:{opacity:0 , y:200},
            visible:{opacity:1 , y:0},
          }}initial="hidden" animate="visible" transition={{duration:.7 , delay:0.25}} >
            <Outlet/>

          </motion.div>
        <Footer/>
    </div>
  )
}

export default Layout