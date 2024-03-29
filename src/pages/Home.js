import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from '@mui/material';
import Search from './Search';

function Home() {
    return(
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
           </div>


           <div className='home_body'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CX48LwfGd2ZwWXo9tcaQfJmUF2DCIYYTbd2gPV4J&s"
                    alt=""
                    />
                <div className='home_inputContainer'>
                    <Search /> 
                </div>
           </div>
        </div>
    )
}

export default Home 