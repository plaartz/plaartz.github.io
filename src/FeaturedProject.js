import './FeaturedProject.css'

const FeaturedProject = (props) => {

    return (
        <div className="feature-project" id={props.name} >

            <div className="project-summary" style={{ float: props.float, textAlign: props.float }}>
                <p className="feature green code">Featured Project</p>
                <h2 className="projectName" style={{ textAlign: props.float }}>{props.name}</h2>
                <div className="project-description" >
                    <p>{props.description}</p>
                </div>
                <ul className={"project-tech-list"} style={{ justifyContent: props.float, }}>
                    <li>{props.tools[0]}</li>
                    <li>{props.tools[1]}</li>
                    <li>{props.tools[2]}</li>
                    <li>{props.tools[3]}</li>
                </ul>
                <div className="feature_links" style={{ float: props.float }}>
                    <a className="github_link" target="_blank" href={props.github}>
                        <svg>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
                        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                        2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
                        5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                </div>
            </div>
        </div>
    );

}

export default FeaturedProject;