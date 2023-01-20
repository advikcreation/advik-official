import { Navbar } from "./components"
import { About, Footer, Header, Skills, Testimonial, Work } from "./container"

const Home = () => {
    return (
        <div className="App">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        </div>
    )
}

export default Home
