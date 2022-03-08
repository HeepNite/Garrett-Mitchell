import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <section className="social-container">
            <article className="social-content">
                <ul>
                    <li> <FaFacebookF /> </li>
                    <li> <FaInstagram /> </li>
                    <li> <FaLinkedinIn /> </li>
                    <li> <FaWhatsapp /> </li>
                </ul>
                <div className="divider-mdv"></div>
                <h4>Follow Me</h4>  
            </article>

        </section>
    );
}

export default SocialMedia;