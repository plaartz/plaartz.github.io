import FeaturedProject from './FeaturedProject';

function Projects(props) {

    return (
        <div id="projects" className="contentBlock">
            <h2>Things I've built</h2>
            <FeaturedProject
                name="Restaurant Rater"
                description="An interactive app allowing a user to search for restaurants based on cuisine and ratings"
                tools={["Java", "JSON", "Backend"]}
                float="right"
                github="https://github.com/plaartz/cs400-restaurant-app" />
            <FeaturedProject
                name="Device Check In"
                description="Using a raspberry pi, camera, and a display, displays GUI prompts to check an item in/out using QR Codes 
                and a google sheet containing item ID and check in information."
                tools={["Python", "Raspberry Pi", "Google API", "Linux"]}
                float="left"
                github="https://github.com/plaartz/checkIn" />
            <FeaturedProject
                name="Galaga VR Clone"
                description="Using C# and unity I created a clone of Galaga that can be played in both VR as well as on a desktop"
                tools={["C#", "Unity", "VR", "Blender"]}
                float="right" 
                github="https://github.com/plaartz/unity3d-galaga-scripts"/>

        </div>

    );
}

export default Projects;