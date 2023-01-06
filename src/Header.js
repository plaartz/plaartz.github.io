import './header.css';
const Header = () => {
    function scroll() {
        
    }
    return (
        <div className="header" >
            <div className="titleContainer">
                <h1 id="title">Porter Laartz</h1>
            </div>
            <div className="quickScroll">
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a className="button" href="resume.pdf">Resume</a>
            </div>
            
        </div>
    );
}

export default Header;