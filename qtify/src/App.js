import React, {useState , useEffect} from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Mainnavbar from './components/Navbar/Mainnavbar';
import {fetchNewAlbums , fetchSongs , fetchTopAlbums} from "./components/Api/Api"
import { StyledEngineProvider } from '@mui/material';


function App() {
  const [data , setData] = useState({});
  const [searchdata , setSearchdata]=useState("")

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };


  useEffect(()=>{
    generateData("topAlbums" , fetchTopAlbums);
    generateData("newAlbums" , fetchNewAlbums);
    generateData("songs" , fetchSongs);
  }, [])


  const {topAlbums=[] , newAlbums=[] , songs=[]}= data 

  return (
    <StyledEngineProvider injectFirst>
      <Mainnavbar searchdata={[...topAlbums , ...newAlbums]} />
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </StyledEngineProvider>
  );
}

export default App;
