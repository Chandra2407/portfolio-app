import React,{useEffect} from 'react'
import Header from '../src/components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Floater from './components/floater/Floater';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    AOS.init({duration:1500});
},[])
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Floater />
    </>
  )
}

export default App