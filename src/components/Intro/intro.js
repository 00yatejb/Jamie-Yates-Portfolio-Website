import "./intro.scss"
import { useEffect, useRef } from "react";


export default function Intro() {
    const textRef = useRef();

    

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/intro/jamie.png" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jamie Yates</h1>
                    <h3>
                    Professional <span ref={textRef}></span>
                    </h3>
                </div>
                    <a href="#work">
                        <img src="assets/intro/scroll-down.png" alt="" />
                    </a>
            </div>
        </div>
    );
}
