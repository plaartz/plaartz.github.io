import './About.css';

const About = () => {
    return (
        <div id="about" className="contentBlock">
            <h2 id="about-header">About Me</h2>
            <div id="about_info">
                <div id="about_text">
                    <p className="intro-paragraph">Hello! My name is Porter and I enjoy creating software that makes a difference
                        and simplifies everyday tasks. My interest in computer science started back in middle school in a design technology course.
                    </p>
                    <p className="intro-paragraph">Fast-forward to today, and I've had the privilege of continuing my education at the University of Wisconsin
                        and taking key courses such as Discrete Mathematics and Data Modeling. </p>
                    <div className="intro-paragraph">
                        <p>A few languages and technologies I've been working with recently are:</p>
                        <ul id="tech-list">
                            <li>Java</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>R</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div id="portfolio_img_div">
                    <img id="portfolio_img" src="./portfolio_img.jpg"></img>
                </div>
            </div>



        </div>

    );
}

export default About;