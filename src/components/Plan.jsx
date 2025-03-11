import "../styles/Plan.css";
import tick from "../assets/tick.svg";
function Plan() {
  return (
    <>
      <div className="usm-plan">
        <div className="usm-plan-inner">
          <div className="usm-plan-left">
            <div className="usm-plan-left-head">Monthly Payment Plan</div>
          </div>
          <div className="usm-plan-right">
            <div className="usm-plan-right-top">
              Learn, Build, Network & Earn
            </div>
            <div className="usm-plan-right-bottom">
              <div className="usm-plan-right-bottom-para">
                Access to 25+ professional courses
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>hackathons & competitions</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Practise mock interviews</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Guranteed jobs and internships </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Clubs & Certifications</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Resume Building with Experts </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Resume Building with Experts </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Personalized Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
