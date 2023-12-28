import React from 'react'
import styles from "./HomePage.module.css"
import { useOutletContext } from 'react-router'
import Hero from "../../components/HeroSection/Hero"
import Section from '../../components/Section/Section'
import { fetchFilters } from '../../components/Api/Api'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {

    const { data } = useOutletContext();
    const {topAlbums , newAlbums , songs}= data;
  return (
    <div>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section title="Songs" data={songs} filterSource={fetchFilters} type="song"/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default HomePage