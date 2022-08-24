import "./navbar.scss"

export default function Navbar({ menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jamie.Yates</a>
                    <div className="itemContainer">
                        <span>Front End Web Developer</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
              </div>
            </div>
        </div>
    );
}