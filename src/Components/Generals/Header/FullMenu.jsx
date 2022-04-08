import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const FullMenu = ({ isOpen }) => {
console.log(isOpen);
    const loading = useRef(null);
    const menuChild = gsap.utils.selector(loading)

    useEffect(() => {
        if(isOpen === null){
            gsap.to(loading.current, {
                y: -800
            })
          
        }
        else if (isOpen === true) {
            gsap.to(loading.current, {
                duration: 1,
                y: 0,
                ease: "power3.inOut",
                display: "block"
            })
            gsap.to(menuChild('.full-menu-item'), {
                duration: 1.5,
                opacity: 1,
                y: 0,
                ease: "power3.inOut"
            }, "-=0.3")

            gsap.to(menuChild('.full-menu-information'), {
                duration: 1.5,
                opacity: 1,
                y: 0,
                ease: "power3.inOut"
            }, "-=0.3")
            return
        } else if (isOpen === false) {
            gsap.to(menuChild('.full-menu-item'), {
                duration: 1.5,
                opacity: 0,
                y: 150,
                ease: "power3.inOut"
            })
            gsap.to(menuChild('.full-menu-information'), {
                duration: 1.5,
                opacity: 0,
                y: -150,
                ease: "power3.inOut"
            }, "-=0.3")

            gsap.to(loading.current, {
                duration: 1,
                y: -800,
                ease: "power3.inOut"
            }, "-=0.8")
            return
        }

    }, [isOpen]);


    const handleLink = (e) => {
        console.log(e.target);
    }

    return (
        <section ref={loading} className="full-menu-container">
            <nav className="full-menu-inner-container">
                <article className="full-menu-item">
                    <ul>
                        <li>
                            <a onClick={handleLink} href="#Hero">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Sample">Sample</a>
                        </li>
                        <li>
                            <a href="#Review">Review</a>
                        </li>

                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </article>

                <article className="divider-lgv"></article>

                <article className="full-menu-information">
                    <ul>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </article>
            </nav>
        </section>
    );
}

export default FullMenu;