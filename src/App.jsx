import About from "./components/about/About"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"


function App() {

  return (
    <div className="App  overflow-hidden bg-[#010B13]">
      <Header />
      <Hero />
      <About />
      <Skills />
      
    </div>
  )
}

export default App
