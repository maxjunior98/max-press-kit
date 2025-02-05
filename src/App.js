import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {

  function handleInstagram() {
    window.open("https://www.instagram.com/maxrecuerojr/")
  }
  
  function handleSoundCloud() {
    window.open("https://soundcloud.com/max-recuero")
  }

  return (
    <div className="App">
      <Header/>
      <Home id="home" openInstagram={handleInstagram} openSoundCloud={handleSoundCloud} />
      <About id="about"/>
      <Contact id="contact" openInstagram={handleInstagram} />
    </div>
  );
}

export default App;
