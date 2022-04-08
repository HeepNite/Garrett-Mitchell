
import garrett from "../../Assets/Img/garrett2.jpeg";
const About = () => {
    return (
        <section id="About" className="about-container">
            <article className="about-title-container">
                <div className="about-title">
                    <h2>About Me</h2>
                    <div className="divider-mdh"></div>
                </div>
                <div className="divider-smv"></div>

            </article>

            <article className="about-image">

                <div className="about-img-container">
                    <img src={garrett} alt="#" />
                </div>
            </article>
            <article className="about-content">
                <h2>Im Garrett Mitchell and this is my history</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing    andtypesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="about-chart-container">
                    <h5 className="about-chart-title">Best seller in Amazon 2021</h5>
                    <h5 className="about-chart-porcent">80%</h5>
                </div>
                <div className="about-bar-chart-container">
                    <div className="about-bar-chart-1"></div>
                </div>
                <div className="about-chart-container">
                    <h5 className="about-chart-title">Best seller in Amazon 2021</h5>
                    <h5 className="about-chart-porcent">70%</h5>
                </div>
                <div className="about-bar-chart-container">
                    <div className="about-bar-char-2"></div>
                </div>
                <div className="about-chart-container">
                    <h5 className="about-chart-title">Best seller in Amazon 2021</h5>
                    <h5 className="about-chart-porcent">90%</h5>
                </div>
                <div className="about-bar-chart-container">
                    <div className="about-bar-chart-3"></div>
                </div>

               
                <button className="about-buy-btn">Buy on Amazon</button>
            </article>
        </section>
    );
}

export default About;
