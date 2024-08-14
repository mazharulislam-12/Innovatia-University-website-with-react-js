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
      </div>

    </div>
  )
}

export default App