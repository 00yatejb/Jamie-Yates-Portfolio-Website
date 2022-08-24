import { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/projects/corporate-soon.png" alt=""/>
            </div>
            <div className="right">
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
                {message && <span>Thank you for your message.<br/><br/>:-)</span>}
            </form>
            </div>
        </div>
    );
}