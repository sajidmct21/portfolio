import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Home from '../components/Home'

function Page() {
    return (
        <div className='pt-16'>
            <Nav />
            <Home />
            <About />
            <Skills />
            <Project />
        </div>
    )
}

export default Page