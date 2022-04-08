import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import FullMenu from "./FullMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(null);

    const [disable, setDisable] = useState(false);

    /* fucntions */
    const handleBtnMenu = () => {

        if (isOpen === null) {
/*             disableMenu();
 */            setIsOpen(true);
        } else if (isOpen === true) {
/*             disableMenu();
 */            setIsOpen(false);
        } else if (isOpen === false) {
            setIsOpen(true);
/*             disableMenu();
 */        }
    }


const disableMenu = () => {
    setDisable(!disable);
    setTimeout(() => {
        setDisable(false);
    }, 1000);
}
return (
    <header className="header-container">
        <section className="header-logo">
            <img src="#" alt="" />logo
        </section>
        <button disabled={disable} onClick={handleBtnMenu} className='menu-btn'>
            <RiMenu4Line />
        </button>
        <FullMenu isOpen={isOpen} />
    </header>
);
}

export default Header;