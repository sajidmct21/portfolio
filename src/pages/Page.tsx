import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Page() {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <Skills />
            <Project />
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    )
}

export default Page