import "./reviews.scss"

export default function Reviews() {
    return (
        <div className="reviews" id="reviews">
            <h1>Reviews</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img className="left" src="assets/reviews/left-quotation.png" alt=""/>
                        <img className="user" src="assets/work/coming-soon1.png" alt=""/>
                        <img className="right" src="assets/reviews/right-quotation.png" alt=""/>

                    </div>
                    <div className="center">"Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.</div>
                    <div className="bottom">
                        <h3>Jamie</h3>
                        <h4>CEO of Nothing</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}