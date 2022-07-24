
import "../css/score.scss";

const Score = (props) => {





  return (
    <div className="container">
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6">
          <div className="container center-align">
            <div className="set-size charts-container">
              <div className={`pie-wrapper progress-${props.score} style-2`}>
                <span className="label">
                  {props.score}
                  <span className="smaller">%</span>
                </span>
                <div className="pie">
                  <div className="left-side half-circle"></div>
                  <div className="right-side half-circle"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s3"></div>
      </div>
      <div className="row">
        <div className="container center-align">
          <h1>
            {(() => {
              switch (true) {
                case props.score >= 80:
                  return `It's a Great Score!`;
                
                case ( props.Score >= 60 && props.score<80):
                  return "You can do better";
                case (props.score < 60 && props.Score >= 40):
                  return "Keep working on learning";
                case (props.score < 40) :
                  return "You need to work hard my Buddy";
                default:
                    return "Looks Like some issue  at our end";
                 
              }
            })()}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Score;
