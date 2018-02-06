import React, { Component } from 'react'; 
import Skills from './QuickGlance/Skills';
import Experience from './QuickGlance/Experience';
import Projects from './QuickGlance/Projects';
import './Header.css';
class Header extends Component {
    render() {

      return (
        <div className="Header">
        <Skills />
        <Experience />
        <Projects />
        </div>
      );
    }
  }

  export default Header