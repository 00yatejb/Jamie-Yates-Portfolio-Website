import "./work.scss"

export default function Work() {
    return (
        <div className="work" id="work">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/work/coming-soon1.png" alt=""/>
                                </div>
                                <h2>Coming Soon 1</h2>
                                <p>qwertyui asdfghjkl xcvbnm</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/work/coming-soon1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/work/scroll-left.png" className="arrow left" alt=""/>
            <img src="assets/work/scroll-right.png" className="arrow right" alt=""/>
        </div>
    )
}