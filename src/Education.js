import './Education.css';
import $ from 'jquery-csv';

function switchTab(buttonID) {
    const buttons = document.getElementsByClassName("education-button");

    const prevSelected = document.getElementsByClassName("education-button selected")[0];
    prevSelected.classList.remove("selected");

    const newSelection = document.getElementById(buttonID);
    newSelection.classList.add("selected");

    const tabs = document.getElementsByClassName("education-tab")[0].childNodes;

    for (let tab of tabs) {
        if (tab.id === buttonID + "-tab") {
            tab.removeAttribute("hidden");
        } else {
            tab.setAttribute("hidden", true);
        }
    }
}


const Education = () => {

    return (
        <div id="education" className="contentBlock">
            <h2>My Education</h2>
            <div id="education-content">
                <div id="buttons">
                    <button id="wisconsin" className="selected education-button code" onClick={() => switchTab("wisconsin")}>University of Wisconsin</button>
                    <button id="tprep" className="education-button code" onClick={() => switchTab("tprep")}>Tampa Preparatory School</button>

                </div>
                <div className="education-tab">
                    <div id="wisconsin-tab" selected>
                        <h3>University of Wisconsin</h3>
                        <p className="duration code">September 2021 - Present</p>
                        <ul>
                            <li>B.S. Computer Science and Data Science</li>
                            <li>3.8 GPA</li>
                            <li>Courses in:
                                <ul id="course-list">
                                    <li>Discrete Mathematics</li>
                                    <li>Object Oriented Programming</li>
                                    <li>Data Science Modeling and Programming</li>
                                    <li>Computer Engineering</li>
                                </ul>
                            </li>
                            <li>Clubs: Software Dev Club, UW AI, Web Dev UW</li>
                        </ul>
                    </div>
                    <div id="tprep-tab" hidden>
                        <h3>Tampa Preparatory School</h3>
                        <p className="duration code">September 2017 - May 2021</p>
                        <ul>
                            <li>4.2 GPA</li>
                            <li>1490 SAT (800 Math, 690 Reading)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Education;