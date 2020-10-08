import React, {useState} from "react";
import { Link } from "react-router-dom";

function Test(props){
  return <div>
    <button onClick={props.closePopup}>close me</button>  
    </div>
    

}

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  if (count < 3) {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          {props.text}
          
        </button>

      </div>
    );      
  }
  else {
    return (
      <div>
        
        <Link   to={{pathname:"https://instagram.com"}}
            target="_blank"> 
            
            The git repo :)
            </Link>
      </div>
    );
  }
}

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      Woah here are projects :0
      <Example text="Click me for access to the top secret projects ;)"></Example>
      

    </div>
  );
}
