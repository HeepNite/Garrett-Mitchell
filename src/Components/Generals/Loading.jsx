/* Core */
import { useEffect, useRef } from "react";

/* Aniations */
import { gsap } from 'gsap';

const Loading = () => {
    /* ref */
    const loading = useRef(null);
    const loadingChild = gsap.utils.selector(loading)

    /* animations */
    useEffect(() => {

        gsap.from(loadingChild('.loading-content'), {
            duration: 1,
            opacity: 0,
            y: -150,
        })
        gsap.from(loadingChild('.loading-button'), {
            duration: 1.5,
            opacity: 0,
            y: 150,
            ease: "power3.inOut"
        }, "-=0.3")

    }, [])

    /* functions */
    const handleLoad = (e) => {
    e.preventDefault();
        gsap.to(loadingChild('.loading-content'), {
            duration: 0.7,
            opacity: 0,
            y: -150,
        })

        gsap.to(loadingChild('.loading-button'), {
            duration: 1.5,
            opacity: 0,
            y: 150,
            ease: "power3.inOut"
        }, "-=0.2")

        gsap.to(loadingChild('.loading-inner-container'), {
            duration: 1.5,
            y: -800,
            ease: "power3.inOut"
        }, " +=4")

        gsap.to(loading.current, {
            duration: 1,
            y: -800,
            display: "none",
            ease: "power3.inOut"
        }, "-=1")
    }
    return (
        <div ref={loading} className="loading-container">
            <section className="loading-inner-container">
                <article className="loading-content">
                    <h1>GM</h1>
                </article>
                <article className="loading-button">
                    <button onClick={handleLoad} >
                        <span>Know More</span>
                    </button>
                </article>
            </section>

        </div>
    );
}

export default Loading;
