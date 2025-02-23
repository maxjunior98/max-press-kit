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

  function handleWhatsApp(){
    const URL = "https://wa.me/+5546999408953"
    window.open(URL)
  }

  return (
    <div className="App_Max_Recuero">
      <Header/>
      <Home openInstagram={handleInstagram} openSoundCloud={handleSoundCloud} openWhatsApp={handleWhatsApp} />
      <About />
      <Contact openInstagram={handleInstagram} openWhatsApp={handleWhatsApp} />
    </div>
  );
}

export default App;
