const Contact = () => {
    return (
        <section className="contact-container">
            <article className="contact-title-container">
                <div className="contact-title">
                    <h2>Get in touch</h2>
                    <div className="divider-smh"></div>
                </div>
                <div className="divider-smv"></div>
            </article>

            <article className="contact-form">
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="phone" placeholder="Phone" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className="contact-submit-btn">Submit</button>
                </form>
            </article>

            <article className="contact-content-container">
                <div className="contact-content">
                    <h3>Email</h3>
                    <h6>garrettm@garrettmitchell.com</h6>
                    <h3>Contact to me </h3>
                    <h6>+1 (818) 888-8888</h6>
                    <h3>Address</h3>
                    <h6>123 Main Street</h6>
                    <h6>Anytown, USA</h6>
                </div>
            </article>
            
            
        </section>
    );
}

export default Contact;