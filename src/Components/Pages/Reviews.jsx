import ReviewOne from "../../Assets/Img/review-1.jpeg";
import ReviewTwo from "../../Assets/Img/review-2.jpeg";
import ReviewThree from "../../Assets/Img/review-3.jpeg";
import ReviewFour from "../../Assets/Img/review-4.jpeg";
const Reviews = () => {
    return (
        <section className="reviews-container">
            <article className="reviews-title-container">
                <div className="reviews-title">
                    <h2>Reviews</h2>
                    <div className="divider-smh"></div>
                </div>
                <div className="divider-smv"></div>
            </article>

            <article className="reviews-content">
                <h3>Lorem Impsum</h3>
                <div className="divider-mdh"></div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
                <h6>
                    Lorem Ipsum is simply dummy text of the
                </h6>
            </article>

            <article className="reviews-slider">
                <h2> What they say abut the book</h2>
                <ul className="review-image-slider">
                    <li><img src={ReviewOne} alt="" /></li>
                    <li><img src={ReviewTwo} alt="" /></li>
                    <li><img src={ReviewThree} alt="" /></li>
                    <li><img src={ReviewFour} alt="" /></li>

                </ul>
                <ul className="review-content-slider">
                    <li>
                        <h4>Lorem Ipsum</h4>
                        <div className="divider-mdh"></div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        </p>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Reviews;