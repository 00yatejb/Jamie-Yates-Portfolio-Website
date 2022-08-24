import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#solutions">Solutions</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#reviews">Reviews</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Get in touch</a>
                </li>
            </ul>

        </div>

    );
}