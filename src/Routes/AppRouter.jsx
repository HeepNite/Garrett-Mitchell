import { Routes, Route, BrowserRouter } from "react-router-dom";
import FullMenu from "../Components/Generals/Header/FullMenu";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Hero from "../Components/Pages/Hero";
import Reviews from "../Components/Pages/Reviews";
import Sample from "../Components/Pages/Sample";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <FullMenu />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Sample />} />
                <Route path="/" element={<Reviews />} />
                <Route path="/" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;