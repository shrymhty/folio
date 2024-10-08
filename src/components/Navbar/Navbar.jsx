import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Navbar.css';
import Header from '../Header/Header';
import About from '../About/About';
import Work from '../Work/Work'
import Contact from '../Contact/Contact'


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  // Define intersection observers for each section
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.5 });

  // Update active section based on which one is in view
  useEffect(() => {
    if (headerInView) setActiveSection('header');
    else if (aboutInView) setActiveSection('about');
    else if (workInView) setActiveSection('work');
    else if (contactInView) setActiveSection('contact');
  }, [headerInView, aboutInView, workInView, contactInView]);

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className={activeSection === 'header' ? 'active' : ''}>
            <a href="#header" onClick={(e) => handleScroll(e, 'header')}>sm</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>about</a>
          </li>
          <li className={activeSection === 'work' ? 'active' : ''}>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>work</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>contact</a>
          </li>
        </ul>
      </nav>

      {/* Define the sections and apply refs */}
      <section id="header" ref={headerRef}> <Header inView={headerInView} /> </section>
      <section id="about" ref={aboutRef}> <About inView={aboutInView} /></section>
      <section id="work" ref={workRef}> <Work inView={workInView} /></section>
      <section id="contact" ref={contactRef}><Contact inView={contactInView} /></section>
    </>
  );
};

export default Navbar;
