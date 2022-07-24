import { useState } from "react";


const QuestionDisplay = (props) => {


  const [currentAnswer, setCurrentAnswer] = useState(null);
  const getQuestion = ()=>{
    
        if(props.currentQuestion){
          return props.currentQuestion.question
        }
        return '';
  }

const checkOptionValid = (answer)=>{
  
  if(props.currentQuestion)
  {
      if(props.currentQuestion.answers[answer]){
        return (<p className="center-align">
          <label>
            <input name="group1" type="radio" value={answer} />
            <span>{props.currentQuestion.answers[answer]}</span>
          </label>
        </p>)
      }
      return (<p>
        <label>
     
          <span></span>
        </label>
      </p>);
    }
  }
    
    const onValueChange=(event)=> {
      setCurrentAnswer(event.target.value);
      
      console.log('value of radio button',event.target.value);
    }
    

  return (
    <div className="container">
      <div className="row">
        <div className="col s1"></div>
        <div className="col s10">
          <h3>{getQuestion()}</h3>
        </div>
        <div className="col s1"></div>
      </div>
      <div className="container" >
      <div className="row">
        <div className="col s1"></div>
        <div className="col s8" onChange={onValueChange}>
          <div className="row">
            <div className="col 6">
            {checkOptionValid('answer_a')}
            </div>
            <div className="col 6">
            {checkOptionValid('answer_b')}
            </div>
          </div>
          <div className="row">
            <div className="col 6">
            {checkOptionValid('answer_c')}
            </div>
            <div className="col 6">
            {checkOptionValid('answer_d')}
            </div>
          </div>
        </div>
        <div className="col s1"></div>
      </div>
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6">
        <button className="btn waves-effect  btn-large" type="submit" name="action" onClick={()=>{props.moveToNextQuestion(currentAnswer); }}  >Submit
                <i className="material-icons right">send</i>
        </button>
        </div>
        <div className="col s3"></div>
      </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;
