import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Program from "./Components/Program/Program"
import Title from "./Components/Title/Title"

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Program />
        <About/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
      </div>

    </div>
  )
}

export default App