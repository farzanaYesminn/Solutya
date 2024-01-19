import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import OurCompany from "./pages/OurCompany"
import OurProject from "./pages/OurProject"
import OurService from "./pages/OurService"
import OurTeam from "./pages/OurTeam"
import OurWork from "./pages/OurWork"
import VIdeoFeedback from "./pages/VIdeoFeedback"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <OurService/>
      <OurCompany/>
      <OurProject/>
      <OurTeam/>
      <OurWork/>
      <VIdeoFeedback/>
      <Footer/>
    </>
  )
}

export default App
