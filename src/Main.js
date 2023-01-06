import $ from 'jquery-csv';
import './Main.css';
import Projects from './Projects';
import Education from './Education';
import About from './About';
import Contact from './Contact';



const Main = () => {





    return (
        <div id="content">
            <div id="intro" className="contentBlock">
                <p className="green code">Hi, my name is</p>
                <h1 className="">Porter Laartz</h1>
                <div className="intro-paragraph">
                    <p>I'm a student at the University of Wisconsin - Madison studying computer and data science. 
                        Currently, I'm focused on expanding my knowledge of computer science  </p>
                </div>
            </div>
            <About />
            <Education />
            <Projects />
            <Contact />
            <div id="footer">
                <p>Designed & Built by Porter Laartz 2023</p>
            </div>
        </div>
    );
}

export default Main;