import React from "react";
import "./Experience.css";

function TimeLineItem(props){
  return <div className="timeline-item"> 
    
    <div onClick={() => (
      props.setActiveTitle(props.title)
    )}><h1>{props.title}</h1></div>
     </div>
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState('BLANK')
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem title="Proj uno"
          setActiveTitle={setActiveTitle}></TimeLineItem>
          <TimeLineItem title="Proj Dose"
          setActiveTitle={setActiveTitle}></TimeLineItem>
        </div>
        <div onClick={() => (
          setActiveTitle("HCS")
        )}> Change the title to HCS! for some reason</div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>Remove this later!!!</p>
          <h4>description of the selected experience</h4>
        </div>
      </div>
    </div>
  );
}
