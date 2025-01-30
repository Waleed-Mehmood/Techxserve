import React from 'react'
import HeroSection from '../components/HeroSection'
import MissionServices from '../components/MissionServices'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.backgroundApp}>
      <HeroSection/>
      <MissionServices/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
