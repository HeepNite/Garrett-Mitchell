import Cursor from "./Components/Generals/Cursor";
import Loading from "./Components/Generals/Loading";
import SocialMedia from "./Components/Generals/SocialMedia";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Hero from "./Components/Pages/Hero";
import Reviews from "./Components/Pages/Reviews";
import Sample from "./Components/Pages/Sample";
function App() {
  return (
    <main >
      {/* <Loading /> */}
      <div className="app-container">
        <SocialMedia />
        <Hero />
        <div className="app-bacground">
          <About />
          <Sample />
          <Reviews />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
