import React, { Component } from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, 
        FaWhatsappSquare, FaWeixin} from 'react-icons/fa';
import "./icons.scss"

class Icons extends Component {
  render() {
    return (
    <div className="footer">  
            <div className="icons">
                <div className="facebook">
                    <a href="https://www.facebook.com/"><FaFacebookSquare/></a>
                </div>
                <div  className="github">
                    <a href="https://github.com/00yatejb"><FaGithubSquare/></a> 
                </div>
                <div className="linkedin">
                   <a href="https://www.linkedin.com/in/jamie-yates-298a093a/"><FaLinkedin/></a>
                </div>
                <div className="whatsapp">
                    <a href="https://www.whatsapp.com/"><FaWhatsappSquare/></a>
                </div>
                <div className="wechat">
                    <a href="https://www.bbc.co.uk"><FaWeixin/></a>   
                </div>
            </div>
        </div>  
    ) 
  }
}

export default Icons
