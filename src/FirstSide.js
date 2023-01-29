import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import { Bounce } from "react-reveal";
import { Avatar } from "@mui/material";
import Stack from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DialogGH from "./DialogGH";


export function FirstSide(){
    return(
        
        <div className="main_container">
            <Bounce left cascade delay={1000}>
                <div className="title_con">
                <h1 className="title">THREE<span>.JS</span></h1>
                </div>
            </Bounce>
            <div className="business_section">
                <Bounce left cascade delay={1400}>
                <div className="socials"><DialogGH /></div>
                <InstagramIcon className="socials"/>
                <FacebookIcon className="socials"/>
                <TwitterIcon className="socials"/>
                <LinkedInIcon className="socials"/>
                </Bounce>
            </div>
        </div>
        
    );
}