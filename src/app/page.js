'use client'
import Header from './header';
import Home from './home';
import AboutMe from './aboutme';
import Experience from './experience';
import Project from './project';

export default function MainPage() {

  return (
    <div className='container'>
      <Header />
      <Home />
      <AboutMe />
      <Experience />
      <Project />
    </div>
  )
}
