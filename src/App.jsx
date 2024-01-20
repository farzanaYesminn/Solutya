import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import OurCompany from "./pages/OurCompany"
import OurProject from "./pages/OurProject"
import OurService from "./pages/OurService"
import OurTeam from "./pages/OurTeam"
import OurWork from "./pages/OurWork"
import VIdeoFeedback from "./pages/VIdeoFeedback"
import WeWork from "./pages/WeWork"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <OurService/>
      <OurCompany/>
      <OurProject/>
      <WeWork/>
      <OurTeam/>
      <OurWork/>
      <VIdeoFeedback/>
      <Footer/>
    </>
  )
}

export default App
