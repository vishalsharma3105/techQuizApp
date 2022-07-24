import M from "materialize-css";
import { useEffect } from "react";

const StartQuiz = (props) => {



//onClick={() => setSelectedTechnology(option)}
  useEffect(() => {
  //  M.AutoInit();

    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }, []);


  
    const dropdownList =  props.techOptions.map((option) => {

      return (
        <li key={option} onClick={()=>{props.onTechnologySelect(option)}}>
          {option}
        </li>
      );
    });

  return (
    <div className="row">
  
      <div className="col s6">
        <div className="container center-align">
          <button className="dropdown-trigger btn-large"   data-target="dropdown1">
            {props.selectedTechnology == null
              ? "Select Technology"
              : props.selectedTechnology}
          </button>
          <ul id="dropdown1" className="dropdown-content ">
            {dropdownList}
          </ul>
        </div>
      </div>
      <div className="col s6 ">
        <div className="container center-align">
      <button className="waves-effect btn-large" onClick={()=>props.onQuizStart()}><i className="material-icons right">send</i>Start Quiz</button>
      </div>
      </div>
    
    </div>
  );
};
export default StartQuiz;
