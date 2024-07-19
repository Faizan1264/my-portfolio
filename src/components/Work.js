import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from './WorkCardData';

const Work = () => {
    return(
       <div className = "work-container">
        <h1 className = "projects-heading">Projects</h1>
          <div className = "project-container">
          {
            WorkCardData.map((val , ind) => {
                return(
                    <WorkCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    text = {val.text}
                    title = {val.title}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            })
          }
          </div>
       </div>
    )
}
export default Work