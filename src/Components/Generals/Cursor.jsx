/* core */
import { useRef } from "react";

const Cursor = () => {

    /* references */
    const cursorRef = useRef(null);

    return (
        <section ref={cursorRef}>
            <div className="cursor-dot-out"></div>
            <div className="cursor-dot-in"></div>
        </section>
    );
}

export default Cursor;