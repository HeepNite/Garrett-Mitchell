const Sample = () => {
    return (
        <section id="Sample" className="sample-container">
            <article className="sample-title-container">
                <div className="sample-title">
                    <h2>Sample</h2>
                    <div className="divider-smh"></div>
                </div>
                <div className="divider-smv"></div>
            </article>
            {/* crear slider */}
            <article className="sample-content">
                <ul>
                    <li>
                        <h3>Sample section 1 Introduction</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="sample-read-btn">
                            Read More
                        </button>
                        <div className="divider-mdh"></div>
                        <h5>Next section 2 knowledge</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="sample-buy-btn">
                            Buy Now
                        </button>
                    </li>

                    <li>
                        <h3>Sample section 4 Inspiration</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="sample-read-btn">
                            Read More
                        </button>
                        <div className="divider-mdh"></div>
                        <h5>Next section 5 know yourself</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="sample-buy-btn">
                            Buy Now
                        </button>
                    </li>

                    <li>
                        <h3>Sample section 8 Habits</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="sample-read-btn">
                            Read More
                        </button>
                        <div className="divider-mdh"></div>
                        <h5>Next section 10 Tips for happiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="sample-buy-btn">
                            Buy Now
                        </button>
                    </li>

                </ul>
            </article>
        </section>
    );
}

export default Sample;